FROM node:15

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "npm", "start" ]
