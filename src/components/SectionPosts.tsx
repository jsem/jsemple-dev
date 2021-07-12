import React, { Component } from 'react';
import { ApolloError } from '@apollo/client';
import Error from './Error';
import Loading from './Loading';
import NoPosts from './NoPosts';
import PostSummary from './PostSummary';
import Section from './Section';
import * as GetPosts from '../pages/__generated__/GetPosts';

interface Props {
    data : GetPosts.GetPosts;
    loading : boolean;
    error : ApolloError;
}

class SectionPosts extends Component<Props> {
    render() {
        return (
            <Section id='posts' title='Posts'>
            {
                this.props.error ?
                    <Error message={'Could not find posts'}/>
                : this.props.loading ?
                    <Loading/>
                : this.props.data && this.props.data.posts && this.props.data.posts.length > 0 ?
                    this.props.data.posts.map(post => <PostSummary key={post.identifier} {...post}/>)
                :
                    <NoPosts/>
            }
            </Section>
        );
    }
}

export default SectionPosts;
