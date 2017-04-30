//  Import Users
import { user1 } from '../data/users';

//  Write function to return an object that is the action
export function signin(auth) {

    if(auth){
        return {
            type: 'sign_in',
            payload: user1
        }
    }

    return {
        type: 'log_out'
    }
}