FROM node:14
WORKDIR /api-gateway
COPY package*.json /api-gateway/
RUN npm install
COPY . /api-gateway/
EXPOSE 3000
CMD ["node","app.js"]