import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { formatDate } from '../util/Format';
import Post from '../interfaces/Post';

class PostDetails extends Component<Post> {
    render() {
        return (
            <div id={String(this.props.id)} className='container-post'>
                <Link className={'post-back'} to={'/'}>&lt; Back</Link>
                <h2 className={'post-header'}>{this.props.title}</h2>
                <p className={'post-date'}>{formatDate(this.props.createdOn)}</p>
                <div id={String(this.props.id)} className='container-post-body'>
                    <ReactMarkdown children={this.props.body}/>
                </div>
            </div>
        );
    }
}

export default PostDetails;
