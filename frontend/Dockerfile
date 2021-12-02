FROM node:16-alpine

RUN mkdir /frontend

WORKDIR /frontend

RUN apk update && apk upgrade && apk add --no-cache bash git

COPY . /frontend/

RUN yarn global add nodemon ts-node typescript

RUN yarn install

EXPOSE 3000

CMD ["yarn", "dev"]