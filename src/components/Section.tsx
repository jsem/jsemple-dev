import React, { Component } from 'react';
import ISection from '../interfaces/Section';

class Section extends Component<ISection> {
    render() {
        return (
            <div id={this.props.id} className='container-section'>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}

export default Section;
