import React, { Component } from 'react';

class FooterLink extends Component {
    render() {
        return (
            <p>
                <span className='link-footer' onClick={() => {document.getElementById(this.props.link).scrollIntoView({behavior: 'smooth'});}}>{this.props.title}</span>
            </p>
        );
    }
}

export default FooterLink;
