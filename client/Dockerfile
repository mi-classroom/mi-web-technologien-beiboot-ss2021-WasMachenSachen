FROM node:15

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

RUN npm run build

CMD ["npm", "run", "serve"]
