FROM node

# Install simple web server
RUN npm install express

# Create folder for application
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Add move build application
COPY package.json /usr/src/app/
COPY server.js /usr/src/app/
COPY bundle.js /usr/src/app
COPY index.html /usr/src/app

RUN mkdir -p /usr/src/app/style
COPY /style/style.css /usr/src/app/style

EXPOSE 8080

CMD ["npm","start"]