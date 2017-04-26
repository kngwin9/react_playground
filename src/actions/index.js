import { users } from '../data/users';

//  Catching true or false, and username
//  Passed from the submit button being pressed
export function signin(auth, username){
    console.log('ACTION username ', username);

    const user = users[username];

    if(auth && user){
        return {
            type: 'sign_in',
            payload: user
        }
    }
    return {
        type: 'sign_out'
    }
}