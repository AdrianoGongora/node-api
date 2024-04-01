FROM node:20-bullseye

WORKDIR /app

COPY . ./

CMD ["npm", "run", "build"]

RUN npm install

EXPOSE 3002

CMD ["npm", "start"]
