FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./

EXPOSE 8080

RUN npm install

COPY . .

COPY ./dist ./dist


CMD ["npm", "run", "start:prod"]