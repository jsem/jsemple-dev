import React, { Component } from 'react';
import MenuItem from '../interfaces/MenuLink';

class FooterLink extends Component<MenuItem> {
    navigate = () => {
        if (window.location.pathname === '/') {
            document.getElementById(this.props.link).scrollIntoView({behavior: 'smooth'});
        } else {
            window.location.href =`/#${this.props.link}`;
        }
    }

    render() {
        return (
            <p>
                <span className='link-footer' onClick={this.navigate}>{this.props.title}</span>
            </p>
        );
    }
}

export default FooterLink;
