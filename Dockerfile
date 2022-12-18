FROM node:14.18.3-stretch AS build-client
WORKDIR /app/client
COPY ./client/package*.json ./
RUN yarn install --no-optional
COPY ./client ./
RUN yarn build \
	&& yarn prune --production

FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app/server
COPY .server/package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app/server
COPY --from=deps /app/server/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:16-alpine AS runner

WORKDIR /usr/src/app/server

COPY package.json yarn.lock ./

RUN yarn install --prod

COPY --from=builder /app/server/dist ./dist
ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "start:prod"]