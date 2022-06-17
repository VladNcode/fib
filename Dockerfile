FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run tsc
RUN npm prune --production
CMD ["node", "./dist/app.js"]