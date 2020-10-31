import React, { Component } from 'react';
import PortfolioLink from './PortfolioLink';
import PortfolioTechnology from './PortfolioTechnology';

class PortfolioItem extends Component {
    render() {
        return (
            <div id={this.props.id} className='container-portfolio'>
              <a href={this.props.technologyLink} target='_blank' rel='noopener noreferrer'><img className='image-logo-portfolio' src={this.props.technologyImage} alt={this.props.technologyImageAlt}/></a>
              <div className='container-portfolio-text'>
                  <h3><a className='portfolio-header-link' href={this.props.link} target='_blank' rel='noopener noreferrer'>{this.props.title}</a></h3>
                  <p>{this.props.description}</p>
                  <p>
                    <span className='label-technologies'>Technologies:</span>
                    {this.props.technologies.map((technology, index) => <PortfolioTechnology key={`${this.props.id}-technology-${index}`}title={technology}/>)}
                  </p>
                  <p className='paragraph-small'><span className='label-links'>Links:</span></p>
                  {this.props.links.map((link,index) => <PortfolioLink key={`${this.props.id}-link-${index}`}link={link.link} image={link.image} imageAlt={link.imageAlt}/>)}
              </div>
          </div>
        );
    }
}

export default PortfolioItem;
