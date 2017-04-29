import React from 'react';

import Greeting from './greeting'


function Header() {
    return (
        <div>
            <h1>My Awesome App</h1>
            <Greeting color="red" name="Bob"/>
            <Greeting color="#00ff00" name="George"/>
            <Greeting color="blue" name="Heather"/>
            <Greeting color="rgba(150, 20, 200, .5)" name="Karen"/>
            <Greeting name="Joan"/>
        </div>
    )
}

export default Header;