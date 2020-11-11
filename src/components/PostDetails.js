import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { formatDate } from '../util/Format';

class PostDetails extends Component {
    render() {
        return (
            <div id={this.props.id} className='container-post'>
                <Link className={'post-back'} to={'/'}>&lt; Back</Link>
                <h2 className={'post-header'}>{this.props.title}</h2>
                <p className={'post-date'}>{formatDate(this.props.createdOn)}</p>
                <div id={this.props.id} className='container-post-body'>
                    <ReactMarkdown children={this.props.body}/>
                </div>
            </div>
        );
    }
}

export default PostDetails;
