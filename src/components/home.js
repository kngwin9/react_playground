import React, { Component } from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import './home.css';

import { signin } from '../actions/index';


const Home = (props) => {
    console.log('Auth:', props.auth);

    const { auth, user } = props;

    const displayGreeting = () => {
        if(auth){
            return <Greeting color={user.fav_color} name={user.name}/>;
        }

        return <h2>Please click button to sign in...</h2>;
    };

    return (
        <div className="home">
            <button onClick={() => {
                props.signin(!auth)
            }}>{ auth ? 'Sign Out' : 'Sign In'}</button>
            { displayGreeting() }
        </div>
    )
};

function mapStateToProps(state){
    return {
        auth: state.app.auth,
        user: state.app.user
    }
}

export default connect(mapStateToProps, {signin})(Home);

