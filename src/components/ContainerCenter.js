import React, { Component } from 'react';

class ContainerCenter extends Component {
    render() {
        return (
            <div className='container-app'>
                {this.props.children}
            </div>
        );
    }
}

export default ContainerCenter;
