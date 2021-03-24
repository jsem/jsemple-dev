import React, { Component } from 'react';

interface Props {
    text : string;
}

class AboutMeDetail extends Component<Props> {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}

export default AboutMeDetail;
