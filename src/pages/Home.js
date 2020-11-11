import React, { Component } from 'react';
import ContainerContent from '../components/ContainerContent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionAboutMe from '../components/SectionAboutMe';
import SectionContact from '../components/SectionContact';
import SectionPortfolio from '../components/SectionPortfolio';
import SectionPosts from '../components/SectionPosts';
import { EmailAddress } from '../constants/Constants';
import Details from '../constants/Details';
import Links from '../constants/Links';
import PortfolioItems from '../constants/PortfolioItems';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            posts: null,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        fetch('/api/v1/post').then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Could not retrieve posts');
            }
        }).then(json => {
            this.setState({
                error: null,
                posts: json,
            });
        }).catch(error => {
            this.setState({
                error: error,
                posts: null,
            });
        })
    }
    
    render() {
        return (
            <div className='container-outer'>
                <Header links={Links}/>
                <ContainerContent>
                    <SectionAboutMe details={Details}/>
                    <SectionContact email={EmailAddress}/>
                    <SectionPortfolio items={PortfolioItems}/>
                    <SectionPosts error={this.state.error} posts={this.state.posts}/>
                </ContainerContent>
                <Footer links={Links}/>
            </div>
        );
    }
}

export default Home;
