FROM mhart/alpine-node:12

RUN mkdir -p /home/node/app/node_modules
# Create app directory
WORKDIR /home/node/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
# Bundle app source
COPY . .

RUN npm install

CMD [ "npm", "start" ]
