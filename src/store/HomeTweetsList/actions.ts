import { FETCH_HOME_TWEETS_LIST, SET_HOME_TWEETS_LIST_LOADING, TweetDetails } from './types';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import api from '../../services/api';

const homeListLoading = (isLoading: boolean) => ({
  type: SET_HOME_TWEETS_LIST_LOADING,
  payload: isLoading,
});

const setHomeListTweets = (tweetsList: Array<TweetDetails>) => ({
  type: FETCH_HOME_TWEETS_LIST,
  payload: tweetsList,
});

export const fetchHomeTweetslist = (
  userId: Number
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>(async (resolve) => {
      dispatch(homeListLoading(true));
      try {
        const { data } = await api.get('tweets');

        dispatch(setHomeListTweets(data));
        dispatch(homeListLoading(false));
      } catch (e) {
        console.log('hello');
      }
    });
  };
};

export default {
  fetchHomeTweetslist,
};
