import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';
import Section from './Section';

class SectionPortfolio extends Component {
    render() {
        return (
            <Section id='portfolio' title='Portfolio'>
                {this.props.items.map(item => <PortfolioItem
                    id={item.id}
                    title={item.title}
                    description={item.description}
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
