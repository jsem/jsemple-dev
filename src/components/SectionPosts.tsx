import React from 'react';
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

const SectionPosts: React.FC<Props> = (props) => {
    return (
        <Section id='posts' title='Posts'>
        {
            props.error ?
                <Error message={'Could not find posts'}/>
            : props.loading ?
                <Loading/>
            : props.data?.posts?.length > 0 ?
                props.data.posts.map(post => <PostSummary key={post.identifier} {...post}/>)
            :
                <NoPosts/>
        }
        </Section>
    );
}

export default SectionPosts;
