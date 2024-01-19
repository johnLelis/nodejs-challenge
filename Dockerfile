FROM node:16-alpine

ENV PORT=3000 \
    HOST=0.0.0.0 \
    POSTGRES_HOST=host.docker.internal \
    POSTGRES_USERNAME=root \
    POSTGRES_PASSWORD=nodejschallenge \
    POSTGRES_DB=postgres \
    POSTGRES_PORT=5432 \
    DIALECT=postgres 

WORKDIR /usr/src
COPY package.json ./

# Install dependencies
RUN apk update && apk add bash
RUN npm install

COPY .sequelizerc .


RUN sed -i 's#config: path.join(__dirname, "config", "config.js")#config: path.join(__dirname, "src", "config", "config.js")#' .sequelizerc

COPY wait-for-it.sh /usr/src/wait-for-it.sh

ENTRYPOINT ["sh", "-c", "/usr/src/wait-for-it.sh db:5432 -- npm run undo:seeder && npm run migrate:dev && npm run seeder && npm run start"]



COPY . .

EXPOSE 3000
