FROM node:apline

WORKDIR /usr/app

COPY package.json /usr/app

COPY server.js /user/app

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]