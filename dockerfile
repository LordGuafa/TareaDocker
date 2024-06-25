FROM node:latest


RUN mkdir -p /usr/src/backend/app

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD ["npm", "start"]