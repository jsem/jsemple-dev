import React, { Component } from 'react';
import AboutMeDetail from './AboutMeDetail';
import Section from './Section';

class SectionAboutMe extends Component {
    render() {
        return (
            <Section id='about-me' title='About Me'>
                {this.props.details.map((detail, index) => <AboutMeDetail key={`about-me-detail-${index}`} text={detail}/>)}
            </Section>
        );
    }
}

export default SectionAboutMe;
