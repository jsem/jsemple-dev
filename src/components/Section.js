import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div id={this.props.id} className='container-section'>
                <h2 className={this.props.headerClass}>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
