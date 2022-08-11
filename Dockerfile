FROM node:alpine3.16 as base

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]