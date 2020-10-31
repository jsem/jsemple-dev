import React, { Component } from 'react';

class Section extends Component {
    render() {
        return (
            <div id={this.props.id} class='container-section'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
