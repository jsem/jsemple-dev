# Portfolio Website
Landing website for my personal portfolio

## About
A simple website built using HTML, Sass, and ReactJS

## Installation
To build and run the website you will need to install:
- [**nodejs**](https://nodejs.org/en/download/)  
  
Then run:
- `npm install`

## Regenerate GraphQL Schema
Start the backend server locally at localhost:4000, then:
- `npm run download-schema`
- `npm run generate-schema`

## Testing
Run the dev webserver using:
- `npm start`

## Deployment
Run the make file and copy the contents of the build directory to the web server:
- `npm run build`
- `scp -r build/* <web_server>:<docroot>/`