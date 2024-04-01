FROM node:20-bullseye

WORKDIR /app

COPY . ./

RUN npm install
RUN npm install -g typescript
RUN npm run build

EXPOSE 3002

CMD ["npm", "start"]
