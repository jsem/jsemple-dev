import React, { Component } from 'react';
import Error from './Error';
import Loading from './Loading';
import NoPosts from './NoPosts';
import PostSummary from './PostSummary';
import Section from './Section';
import Post from '../interfaces/Post';

interface Props {
    posts : Array<Post>;
    error : string;
}

class SectionPosts extends Component<Props> {
    render() {
        return (
            <Section id='posts' title='Posts'>
            {
                this.props.error ?
                    <Error message={'Could not find posts'}/>
                : this.props.posts && this.props.posts.length > 0 ?
                    this.props.posts.map(post => <PostSummary key={post.identifier} {...post}/>)
                : this.props.posts ?
                    <NoPosts/>
                :
                    <Loading/>
            }
            </Section>
        );
    }
}

export default SectionPosts;
