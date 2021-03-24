import React, { Component } from 'react';
import IPortfolioLink from '../interfaces/PortfolioLink';

class PortfolioLink extends Component<IPortfolioLink> {
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
