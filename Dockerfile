FROM node:18

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install --save

COPY . .

RUN npm run build


EXPOSE 3001

CMD [ "npm","start" ]