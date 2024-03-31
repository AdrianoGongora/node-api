FROM node:20-bullseye

WORKDIR /app

COPY . ./

COPY .env ./

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]
