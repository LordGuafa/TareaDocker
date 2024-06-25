FROM node:22-alpine3.19

WORKDIR /app

COPY src/frontend/frontreact/ .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]