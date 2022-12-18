FROM node:14.18.3-stretch as builder
	WORKDIR /app

	ENV PATH /app/node_modules/.bin:$PATH

	COPY package*.json ./
	RUN npm install --no-optional --silent

	COPY . ./

	CMD ["yarn", "dev"]