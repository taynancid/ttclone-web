export const FETCH_HOME_TWEETS_LIST = 'FETCH_HOME_TWEETS_LIST'
export const SET_HOME_TWEETS_LIST_LOADING = 'SET_HOME_TWEETS_LIST_LOADING'

interface User {
  id: Number,
  username: String,
  email: String,
  birthday_date: Date,
  bio: String,
  full_cover_url: String,
  avatar_url: String,
  name: String,
  created_at: Date 
}

interface Tweet {
  id: Number,
  user_id: Number,
  text: String,
  created_at: Date,
  updated_at: Date,
  replies_to_id: Number
}

export interface TweetDetails {
  id: Number,
  user_id: Number,
  text: String,
  created_at: Date,
  updated_at: Date,
  replies_to_id: Number,
  user: User,
  replies: Array<Tweet>,
  repliesTo: Array<Tweet>,
  likedBy: Array<User>,
}

export interface HomeTweetsListState {
  homeTweetsListLoading: Boolean,
  tweetsList: Array<TweetDetails>
};

interface FetchHomeTweetsListAction {
  type: typeof FETCH_HOME_TWEETS_LIST,
  payload: Array<TweetDetails>,
}

interface SetHomeTweetsListLoadingAction {
  type: typeof SET_HOME_TWEETS_LIST_LOADING,
  payload: boolean
}

export type HomeTweetsListActionTypes = FetchHomeTweetsListAction | SetHomeTweetsListLoadingAction;