import React, { Component } from 'react';
import { WebsiteTitle } from '../constants/Constants';

class Header extends Component {
    render() {
        return (
            <div id='site-header' className='container-header'>
                <h1>{WebsiteTitle}</h1>
            </div>
        );
    }
}

export default Header;
