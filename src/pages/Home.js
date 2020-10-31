import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionAboutMe from '../components/SectionAboutMe';
import SectionContact from '../components/SectionContact';
import SectionPortfolio from '../components/SectionPortfolio';
import PortfolioItems from '../constants/PortfolioItems';

class Home extends Component {
    render() {
        return (
            <div className='container-app'>
                <Header/>
                <SectionAboutMe/>
                <SectionContact/>
                <SectionPortfolio items={PortfolioItems}/>
                <Footer/>
            </div>
        );
    }
}

export default Home;
