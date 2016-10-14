FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY bundle.js /usr/src/app
COPY index.html /usr/src/app

EXPOSE 8080

CMD ["npm", "start"]