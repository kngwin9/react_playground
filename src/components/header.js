import React from 'react';
import Greeting from './greeting';

function Header() {
    return (
        <div>
            <h1>My Awesome App</h1>
            <Greeting name="Bob"/>
            <Greeting name="George"/>
            <Greeting name="Heather"/>
            <Greeting name="Karen"/>
        </div>
    )
}

export default Header;
