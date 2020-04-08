# base node image
FROM node:10 

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm install

# Copy local app code to the container
COPY . .

# Build production app
RUN npm run build:ssr

# Start the service
CMD npm run serve:ssr