import {saveLikeToggle} from '../utils/api'

export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_TWEET= 'TOGGLE_TWEET';

export function recevieTweets(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function toggleTweet({id, authedUser, hasLiked}){
    return{
        type: TOGGLE_TWEET,
        id,
        authedUser,
        hasLiked
    }
}

export function handleToggleTweet (info) {
    return (dispatch) => {
      saveLikeToggle(info)
      .then(() => {
        dispatch(toggleTweet(info));
        })
      .catch((e) => {
        console.warn('Error in handleToggleTweet: ', e);
        alert('There was an error liking the tweet. Try again.');
    });
  };
  }