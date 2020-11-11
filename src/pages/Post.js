import React, { Component } from 'react';
import ContainerContent from '../components/ContainerContent';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PostDetails from '../components/PostDetails';
import Links from '../constants/Links';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            post: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch(`http://localhost:8080/api/v1/post/${this.props.identifier}`).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Could not retrieve post');
            }
        }).then(json => {
            console.log(json);
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

    render() {
        return (
            <div className='container-outer'>
                <Header links={Links}/>
                <ContainerContent>
                {
                    this.state.error ?
                        <Error message={'Could not find post'}/>
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
