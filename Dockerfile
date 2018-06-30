FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN yarn
RUN yarn run build

COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
