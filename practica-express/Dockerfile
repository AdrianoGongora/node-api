FROM node:20-bullseye

WORKDIR /app

COPY . ./

RUN npm install

EXPOSE 3002

CMD ["npm", "run", "build"]

CMD ["npm", "start"]
