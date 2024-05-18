FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV PROXIED_URL=${PATHPROXY_PROXIED_URL}
ENV PORT=${PATHPROXY_PORT}

EXPOSE ${PORT}

CMD ["node", "index.js"]
