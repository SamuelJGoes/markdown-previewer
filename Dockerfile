FROM node:18-alpine
ENV LANG C.UTF-8

WORKDIR /app/

COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

RUN npm install --verbose

CMD ["npm", "start"]

