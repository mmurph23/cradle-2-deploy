FROM node:14.6.0 
WORKDIR /usr/src/app
COPY package*.json ./
RUN apk add fsevent
RUN apk add inotify
RUN npm install
COPY . .
EXPOSE 8080