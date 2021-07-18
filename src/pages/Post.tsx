import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import ContainerContent from '../components/ContainerContent';
import ErrorDisplay from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PostDetails from '../components/PostDetails';
import Links from '../constants/Links';
import * as GetPost from './__generated__/GetPost';

export const GET_POST = gql`
    query GetPost($identifier: String!) {
        post(identifier: $identifier) {
            id
            identifier
            title
            body
            summary
            visible
            createdOn
            updatedOn
        }
    }
`;

interface Props {
    identifier : string
}

const Post: React.FC<Props> = ({ identifier }) => {
    const { data, loading, error } = useQuery<GetPost.GetPost, GetPost.GetPostVariables>(GET_POST, { variables: { identifier } });

    return (
        <div className='container-outer'>
            <Header links={Links}/>
            <ContainerContent>
            {
                error ?
                    <div className='container-post'>
                        <Link className={'post-back'} to={'/'}>&lt; Back</Link>
                        <ErrorDisplay message={'Could not find post'}/>
                    </div>
                : loading ?
                    <div className='container-post'>
                        <Link className={'post-back'} to={'/'}>&lt; Back</Link>
                        <Loading/>
                    </div>
                : data?.post ?
                    <PostDetails {...data.post}/>
                :
                    <div className='container-post'>
                        <Link className={'post-back'} to={'/'}>&lt; Back</Link>
                        <ErrorDisplay message={'Could not find post'}/>
                    </div>
            }
            </ContainerContent>
            <Footer links={Links}/>
        </div>
    );
}

export default Post;
