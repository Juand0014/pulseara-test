FROM mhart/alpine-node:16 as builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --no-optional --silent

COPY . ./