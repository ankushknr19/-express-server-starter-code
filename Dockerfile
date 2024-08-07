FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY .env.example .env
RUN npm run build
EXPOSE 80
CMD [ "npm", "start" ]