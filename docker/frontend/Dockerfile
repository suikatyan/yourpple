FROM node:17.6-slim

RUN apt-get update && \
    apt-get upgrade

RUN yarn global add @vue/cli \
    && yarn install

WORKDIR /work
