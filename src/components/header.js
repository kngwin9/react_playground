import React from 'react';

import Greeting from './greeting'


function Header() {
    return (
        <div>
            <h1>My Awesome App</h1>
            <Greeting color="red" name="Bob"/>
            <Greeting color="#00ff00" name="George"/>
            <Greeting color="blue" name="Heather"/>
            <Greeting color="#3192fa" name="Karen"/>
        </div>
    )
}

export default Header;