import React, { Component } from 'react';

class PortfolioTechnology extends Component {
    render() {
        return (
            <span className='technologies'> {this.props.title}</span>
        );
    }
}

export default PortfolioTechnology;
