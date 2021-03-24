import React, { Component } from 'react';
import Section from './Section';

interface Props {
    email : string;
}

class SectionContact extends Component<Props> {
    render() {
        return (
            <Section id='contact' title='Contact'>
                <p>For any inquiries please reach out to me at my email address: <a href={`mailto:${this.props.email}`}>{this.props.email}</a>.</p>
            </Section>
        );
    }
}

export default SectionContact;
