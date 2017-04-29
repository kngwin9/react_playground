
const DEFAULT_STATE = {};

//  Redux passes two things in this function, the current state, and the action.
//  The variable name can be whatever you want.
export default function ( state = DEFAULT_STATE, action ) {
    switch (action.type){
        default:
            return state;
    }
}