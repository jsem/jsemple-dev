import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <p>{this.props.message}</p>
        );
    }
}

export default Error;
