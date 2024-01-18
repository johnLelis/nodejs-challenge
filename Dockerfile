FROM node:16-alpine

ENV PORT=3000\
    HOST=0.0.0.0\
    POSTGRES_HOST=host.docker.internal\
    POSTGRES_USERNAME=root\
    POSTGRES_PASSWORD=nodejschallenge\
    POSTGRES_DB=postgres\
    POSTGRES_PORT=5432\
    DIALECT=postgres 

WORKDIR /usr/src/app
COPY package.json  ./

RUN npm install
COPY . .
EXPOSE 3000



CMD ["npm", "run" ,"start","migrate","seeder" ]


