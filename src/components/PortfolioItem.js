import React, { Component } from 'react';
import PortfolioLink from './PortfolioLink';
import PortfolioTechnology from './PortfolioTechnology';

class PortfolioItem extends Component {
    render() {
        return (
            <div id={this.props.id} class='container-portfolio'>
              <a href={this.props.technologyLink} target='_blank' rel='noopener noreferrer'><img class='image-logo-portfolio' src={this.props.technologyImage} alt={this.props.technologyImageAlt}/></a>
              <div class='container-portfolio-text'>
                  <h3>{this.props.title}</h3>
                  <p>{this.props.description}</p>
                  <p>
                    <span class='label-technologies'>Technologies:</span>
                    {this.props.technologies.map(technology => <PortfolioTechnology title={technology}/>)}
                  </p>
                  <p class='paragraph-small'><span class='label-links'>Links:</span></p>
                  {this.props.links.map(link => <PortfolioLink link={link.link} image={link.image} imageAlt={link.imageAlt}/>)}
              </div>
          </div>
        );
    }
}

export default PortfolioItem;
