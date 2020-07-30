import { FETCH_HOME_TWEETS_LIST } from './types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux';



export const fetchHomeTweetsList = (accessToken : string) => ({
  type: FETCH_HOME_TWEETS_LIST,
  payload: accessToken,
});

// export const fetchtweetslist = (userId: Number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
//   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//     return new Promise<void>((resolve) => {
//       dispatch(isFetching(true))
//       console.log('Login in progress')
// setTimeout(() => {
//         dispatch(set('this_is_access_token'))
// setTimeout(() => {
//           dispatch(isFetching(false))
//           console.log('Login done')
//           resolve()
//         }, 1000)
// }, 3000)
//     })
//   }
// }

export default {
  fetchHomeTweetsList,
};
