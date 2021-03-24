import React, { Component } from 'react';
import ContainerContent from '../components/ContainerContent';
import ErrorDisplay from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PostDetails from '../components/PostDetails';
import Links from '../constants/Links';
import IPost from '../interfaces/Post';

interface Props {
    identifier : string
}

interface State {
    error : string;
    post : IPost;
}

class Post extends Component<Props, State> {
    public readonly state: Readonly<State> = {
        error: null,
        post: null,
    }

    public componentDidMount() {
        this.loadData();
    }

    private loadData = () => {
        fetch(`/api/v1/post/${this.props.identifier}`).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Could not retrieve post');
            }
        }).then(json => {
            this.setState({
                error: null,
                post: json,
            });
        }).catch(error => {
            this.setState({
                error: error,
                post: null,
            });
        })
    }

    public render() {
        return (
            <div className='container-outer'>
                <Header links={Links}/>
                <ContainerContent>
                {
                    this.state.error ?
                        <ErrorDisplay message={'Could not find post'}/>
                    : this.state.post ?
                        <PostDetails {...this.state.post}/>
                    :
                        <Loading/>
                }
                </ContainerContent>
                <Footer links={Links}/>
            </div>
        );
    }
}

export default Post;
