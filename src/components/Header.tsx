import React, { Component } from 'react';
import { WebsiteTitle } from '../constants/Constants';
import MenuLink from '../interfaces/MenuLink';

interface Props {
    links : Array<MenuLink>;
}

class Header extends Component<Props> {
    render() {
        return (
            <div id='site-header' className='container-header'>
                <h1>{WebsiteTitle}</h1>
            </div>
        );
    }
}

export default Header;
