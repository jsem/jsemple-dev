import React, { Component } from 'react';
import FooterLink from './FooterLink';

class Footer extends Component {
    render() {
        return (
            <div id='footer' className='container-footer'>
                <div className='container-footer-inner'>
                    <p>Copyright &copy; James Semple 2020</p>
                    {this.props.links.map((link, index) => <FooterLink key={`footer-link-${index}`} link={link.link} title={link.title}/>)}
                </div>
            </div>
        );
    }
}

export default Footer;
