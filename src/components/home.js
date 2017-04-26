import React, { Component } from 'react';
import { connect } from 'react-redux';
import Greeting from './greeting';
import './home.css';

import { signin } from '../actions/index';

//  Need to make it a state since we're changing state
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

     displayGreeting() {
        if(this.props.auth){
            return <Greeting color={this.props.user.fav_color} name={this.props.user.name}/>;
        }
        return <h2>Please click button to sign in...</h2>;
    };

    handleInputChange(event){
        console.log('event', event.target.value);
        this.setState({
           input: event.target.value
        });
    };

    displayInput(){
        console.log('');
        if(this.props.auth){
            return <div></div>
        }
        return  <input type="text" placeholder="Enter Username" value={this.state.input} onChange={event => { this.handleInputChange(event) } }/>

    }

    handleAuth(){
        this.setState({
           input: ''
        });
        this.props.signin(!this.props.auth, this.state.input)
    }

    render() {
        const {auth} = this.props;
        return (
            <div className="home">
                { this.displayInput() }
                <button onClick={() => {
                     this.handleAuth()
                }}>{ auth ? 'Sign Out' : 'Sign In'}</button>
                { this.displayGreeting() }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.app.auth,
        user: state.app.user
    }
}

export default connect(mapStateToProps, {signin})(Home);

