FROM node:18

WORKDIR /api/node

COPY . .

RUN npm install --save

EXPOSE 3001

CMD [ "npm","start" ]