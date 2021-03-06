import { WebsiteLink, WebsiteTitle } from './Constants';
import PortfolioItem from '../interfaces/PortfolioItem';

const portfolioItems : Array<PortfolioItem> = [
    {
        id: WebsiteTitle,
        title: WebsiteTitle,
        description: 'ReactJS project for this website.',
        link: WebsiteLink,
        technologyLink: 'https://reactjs.org/',
        technologyImage: 'images/react-logo.png',
        technologyImageAlt: 'react logo',
        technologies: [
            'html',
            'sass',
            'reactjs',
            'typescript',
        ],
        links: [
            {
                link: 'https://github.com/jsem/jsemple-dev',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
    {
        id: 'springboot-backend',
        title: 'Springboot Backend',
        description: 'A springboot based backend REST API. Provides post data for the portfolio website.',
        link: `${WebsiteLink}/api/v1/post`,
        technologyLink: 'https://spring.io/projects/spring-boot',
        technologyImage: 'images/springboot-logo.png',
        technologyImageAlt: 'springboot logo',
        technologies: [
            'java',
            'spring',
            'springboot',
            'hibernate',
        ],
        links: [
            {
                link: 'https://github.com/jsem/springboot-backend',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
    {
        id: 'apollo-backend',
        title: 'Apollo Backend',
        description: 'A nodejs and apollo based backend GraphQL API. Provides post data for the portfolio website.',
        link: `${WebsiteLink}/graphql`,
        technologyLink: 'https://www.apollographql.com/',
        technologyImage: 'images/apollo-logo.png',
        technologyImageAlt: 'apollo logo',
        technologies: [
            'nodejs',
            'apollo',
            'typeorm',
            'typescript',
        ],
        links: [
            {
                link: 'https://github.com/jsem/apollo-backend',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
    {
        id: 'docker-iac',
        title: 'Docker IAC',
        description: 'An infrastructure as code project using docker compose.',
        link: `https://github.com/jsem/portfolio-docker`,
        technologyLink: 'https://www.docker.com/',
        technologyImage: 'images/docker-logo.png',
        technologyImageAlt: 'docker logo',
        technologies: [
            'docker',
            'docker-compose',
            'traefik',
            'postgresql',
            'watchtower',
        ],
        links: [
            {
                link: 'https://github.com/jsem/portfolio-docker',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
    {
        id: 'ansible-infrastructure-as-code',
        title: 'Ansible IAC',
        description: 'An infrastructure as code project using ansible.',
        link: 'https://github.com/jsem/ansible-iac',
        technologyLink: 'https://www.ansible.com/',
        technologyImage: 'images/ansible-logo.png',
        technologyImageAlt: 'ansible logo',
        technologies: [
            'ansible',
        ],
        links: [
            {
                link: 'https://github.com/jsem/ansible-iac',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
]

export default portfolioItems;