FROM node:17

WORKDIR /app

COPY package*.json /app/

RUN yarn install

COPY . /app

CMD ["yarn", "start"]


