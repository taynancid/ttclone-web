import { HomeTweetsListState, HomeTweetsListActionTypes, SET_HOME_TWEETS_LIST_LOADING, FETCH_HOME_TWEETS_LIST } from './types'

const initialState: HomeTweetsListState = {
  homeTweetsListLoading: false,
  tweetsList: [],
}

export function homeTweetsListReducer(
  state = initialState,
  action: HomeTweetsListActionTypes
): HomeTweetsListState {
  switch (action.type) {
    case SET_HOME_TWEETS_LIST_LOADING: {
      return {
        ...state,
        homeTweetsListLoading: action.payload,
      }
    }
    case FETCH_HOME_TWEETS_LIST: {
      return {
        ...state,
        tweetsList: action.payload,
      }
    }
    default:
      return state
  }
}