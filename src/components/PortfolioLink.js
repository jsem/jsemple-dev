import React, { Component } from 'react';

class PortfolioLink extends Component {
    render() {
        return (
            <p className='paragraph-small'>
                <img className='image-logo-link' src={this.props.image} alt={this.props.imageAlt}/>
                <a className='link' href={this.props.link} target='_blank' rel='noopener noreferrer'>{this.props.link}</a>
            </p>
        );
    }
}

export default PortfolioLink;
