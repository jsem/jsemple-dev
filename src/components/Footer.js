import React, { Component } from 'react';
import ContainerCenter from './ContainerCenter';
import FooterLink from './FooterLink';

class Footer extends Component {
    render() {
        return (
            <div id='footer' className='container-footer'>
                <ContainerCenter>
                    <div className='container-footer-inner'>
                        <p>Copyright &copy; James Semple 2020</p>
                        {this.props.links.map((link, index) => <FooterLink key={`footer-link-${index}`} link={link.link} title={link.title}/>)}
                    </div>
                </ContainerCenter>
            </div>
        );
    }
}

export default Footer;
