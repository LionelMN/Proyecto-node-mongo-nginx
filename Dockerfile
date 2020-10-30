FROM node:10
WORKDIR /usr/src/app
COPY package* ./
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "start"]