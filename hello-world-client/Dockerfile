FROM node:22-alpine3.19 AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "build"]

EXPOSE 3000