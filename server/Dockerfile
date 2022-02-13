FROM node:15-alpine

WORKDIR /app

COPY package*.json ./



RUN npm install
COPY . .

RUN npm run test

EXPOSE 5000

CMD ["npm", "start"]

