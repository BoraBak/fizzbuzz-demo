FROM mhart/alpine-node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=prod

COPY . .

EXPOSE 3000
CMD [ "node", "src/app.js" ]