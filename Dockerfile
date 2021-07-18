FROM node:lts-buster

WORKDIR /app

COPY . ./
RUN npm install

CMD ["npm", "start"]