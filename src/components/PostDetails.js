import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Section from './Section';
import { formatDate } from '../util/Format';

class PostDetails extends Component {
    render() {
        return (
            <Section id={this.props.identifier} title={this.props.title}>
                <p className={'post-date'}>{formatDate(this.props.createdOn)}</p>
                <ReactMarkdown>
                    {this.props.body}
                </ReactMarkdown>
            </Section>
        );
    }
}

export default PostDetails;
