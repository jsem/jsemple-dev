import React, { Component } from 'react';

interface Props {
    title : string;
}

class PortfolioTechnology extends Component<Props> {
    render() {
        return (
            <span className='technologies'> {this.props.title}</span>
        );
    }
}

export default PortfolioTechnology;
