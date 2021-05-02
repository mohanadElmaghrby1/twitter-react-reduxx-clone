export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export function recevieTweets(tweets){
    return{
        type: RECEIVE_TWEETS,
        tweets
    }
}