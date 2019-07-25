FROM node:alpine

WORKDIR /usr/docker-nodejs-hello-world

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]