import React, { Component } from 'react';

class ContainerContent extends Component {
    render() {
        return (
            <div className='container-content'>
                {this.props.children}
            </div>
        );
    }
}

export default ContainerContent;
