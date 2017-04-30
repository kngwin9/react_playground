//  Need to update if adding classes for states
//  First piece of state
const DEFAULT_STATE = { auth: false, user: {} };
//  Need a way to change the false to a true
//  To do this an action creator is needed


//  Redux passes two things in this function, the current state, and the action.
//  The variable name can be whatever you want.
export default function ( state = DEFAULT_STATE, action ) {
    switch (action.type){
        case 'sign_in':
            //  This will be our new state.
            return { ...state, auth: true, user: action.payload };
        case 'sign_out':
            return { ...state, auth: false, user: {}};
        default:
            return state;
    }
}

//  Ultimately return a new state