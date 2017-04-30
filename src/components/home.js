import React, { Component } from 'react';
//  Used to wire everything together, forms what plugs in action creators
//  connect is a HOC
import { connect } from 'react-redux';

import Greeting from './greeting';

import './home.css'

import { signin } from '../actions/index';

//  for button onclick to execute, we want to call an anon function to call our props from signin to pass in true
const Home = (props) => {
    console.log('Auth:', props.auth);

    const { auth, user} = props;

    return (
    <div className="home">
        <button onClick={ () => { props.signin(true) }}>Sign In</button>
        <h2>Please click button to sign in...</h2>
        <Greeting color="red" name="Bob"/>
    </div>
    )
};

//   This gets called when state is passed in to it. Does not have to be called mapStateToProps()
function mapStateToProps(state) {
    //  Need to return a new object that is added to our props.
    return {
        //  Go back to app_reducer to find out what we calle dthis
        auth: state.app.auth,
        user: state.app.user
    }
}

//  Used for when using connect
//  Replace null with mapStateToProps
export default connect(mapStateToProps, { signin })(Home);