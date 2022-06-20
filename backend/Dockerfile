FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN chmod 777 node_modules
CMD ["npm", "run", "dev"]
EXPOSE 3001
