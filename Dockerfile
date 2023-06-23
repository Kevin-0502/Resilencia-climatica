FROM node:18

WORKDIR /api/node

COPY . .

RUN npm install --save

EXPOSE 3000

CMD [ "npm","start" ]