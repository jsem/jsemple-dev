import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import Section from './Section';
import IPortfolioItem from '../interfaces/PortfolioItem';

interface Props {
    items : Array<IPortfolioItem>;
}

class SectionPortfolio extends Component<Props> {
    render() {
        return (
            <Section id='portfolio' title='Portfolio'>
                <p>Some sample applications I have created to demonstrate the technologies I am capable of working with.</p>
                {this.props.items.map((item, index) => <PortfolioItem
                    key={`portfolio-item-${index}`}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    technologyLink={item.technologyLink}
                    technologyImage={item.technologyImage}
                    technologyImageAlt={item.technologyImageAlt}
                    technologies={item.technologies}
                    links={item.links}
                />)}
            </Section>
        );
    }
}

export default SectionPortfolio;
