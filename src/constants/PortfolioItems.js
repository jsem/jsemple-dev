import { WebsiteLink, WebsiteTitle } from './Constants';

const portfolioItems = [
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
        ],
        links: [
            {
                link: 'https://github.com/jsem/jsemple-dev',
                image: 'images/github-logo.png',
                imageAlt: 'github logo,'
            },
        ],
    },
    // {
    //     id: 'springboot-webapp',
    //     title: 'Springboot Webapp',
    //     description: 'A springboot based web project. Includes a front end angular web app and a backend springboot app.',
    //     link: WebsiteLink,
    //     technologyLink: 'https://spring.io/projects/spring-boot',
    //     technologyImage: 'images/springboot-logo.png',
    //     technologyImageAlt: 'springboot logo',
    //     technologies: [
    //         'java',
    //         'spring',
    //         'springboot',
    //         'hibernate',
    //         'angular',
    //     ],
    //     links: [
    //         {
    //             link: 'https://github.com/jsem/springboot-backend',
    //             image: 'images/github-logo.png',
    //             imageAlt: 'github logo,'
    //         },
    //         {
    //             link: 'https://github.com/jsem/springboot-web',
    //             image: 'images/github-logo.png',
    //             imageAlt: 'github logo,'
    //         },
    //     ],
    // },
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