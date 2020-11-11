import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../util/Format';

class PostSummary extends Component {
    render() {
        return (
            <div className='post-summary'>
                <Link className='post-header-link' to={`/post/${this.props.identifier}`}><h3 className={'post-header'}>{this.props.title}</h3></Link>
                <p className={'post-date'}>{formatDate(this.props.createdOn)}</p>
                <p>{this.props.summary}</p>
            </div>
        );
    }
}

export default PostSummary;
