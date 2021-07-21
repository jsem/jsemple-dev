import React from 'react';
import { gql, useQuery } from '@apollo/client';
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
import * as GetPosts from './__generated__/GetPosts';

export const GET_POSTS = gql`
    query GetPosts {
        posts {
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

}

const Home: React.FC<Props> = () => {
    const { data, loading, error } = useQuery<GetPosts.GetPosts>(GET_POSTS);
    
    return (
        <div className='container-outer'>
            <Header links={Links}/>
            <ContainerContent>
                <SectionAboutMe details={Details}/>
                <SectionContact email={EmailAddress}/>
                <SectionPortfolio items={PortfolioItems}/>
                <SectionPosts error={error} loading={loading} data={data}/>
            </ContainerContent>
            <Footer links={Links}/>
        </div>
    );
}

export default Home;
