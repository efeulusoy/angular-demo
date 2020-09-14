FROM node:12.18.3
WORKDIR /usr/src/app
EXPOSE 4200
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g @angular/cli@10.1.0
COPY . .