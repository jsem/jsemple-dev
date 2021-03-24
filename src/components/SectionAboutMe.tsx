import React, { Component } from 'react';
import AboutMeDetail from './AboutMeDetail';
import Section from './Section';

interface Props {
    details : Array<string>
}

class SectionAboutMe extends Component<Props> {
    render() {
        return (
            <Section id='about-me' title='About Me'>
                {this.props.details.map((detail, index) => <AboutMeDetail key={`about-me-detail-${index}`} text={detail}/>)}
            </Section>
        );
    }
}

export default SectionAboutMe;
