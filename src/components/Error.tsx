import React, { Component } from 'react';

interface Props {
    message : string;
}

class Error extends Component<Props> {
    render() {
        return (
            <p>{this.props.message}</p>
        );
    }
}

export default Error;
