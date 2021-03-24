import PortfolioLink from './PortfolioLink';

export default interface PortfolioItem {
    id : string;
    title : string;
    description : string;
    link : string;
    technologyLink : string;
    technologyImage : string;
    technologyImageAlt : string;
    technologies : Array<string>;
    links : Array<PortfolioLink>;
}