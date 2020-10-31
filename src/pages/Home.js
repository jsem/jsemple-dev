import React, { Component } from 'react';
import ContainerCenter from '../components/ContainerCenter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionAboutMe from '../components/SectionAboutMe';
import SectionContact from '../components/SectionContact';
import SectionPortfolio from '../components/SectionPortfolio';
import { EmailAddress } from '../constants/Constants';
import Details from '../constants/Details';
import Links from '../constants/Links';
import PortfolioItems from '../constants/PortfolioItems';

class Home extends Component {
    render() {
        return (
            <div className='container-outer'>
                <Header links={Links}/>
                <ContainerCenter>
                    <SectionAboutMe details={Details}/>
                    <SectionContact email={EmailAddress}/>
                    <SectionPortfolio items={PortfolioItems}/>
                </ContainerCenter>
                <Footer links={Links}/>
            </div>
        );
    }
}

export default Home;
