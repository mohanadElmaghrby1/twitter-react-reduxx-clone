export const RECEIVE_USERS = 'RECEIVE_USERS'

export function recevieUsers(users){
    return{
        type: RECEIVE_USERS,
        users
    }
}