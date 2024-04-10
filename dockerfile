FROM node:21.7.2-slim

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]