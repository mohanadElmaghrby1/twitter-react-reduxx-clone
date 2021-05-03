import {getInitialData} from '../utils/api'
import {recevieTweets} from './tweets'
import {recevieUsers} from './users'
import {setAuthedUSer} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID='sarah_edo'

export function handleinitialData(){
    return (dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, tweets})=>{
            dispatch(recevieTweets(tweets));
            dispatch(recevieUsers(users));
            dispatch(setAuthedUSer(AUTHED_ID))
            dispatch(hideLoading())
        });
    }
}