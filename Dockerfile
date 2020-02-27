FROM node:current
RUN useradd --user-group --create-home --shell /bin/bash app
ENV HOME=/home/app
WORKDIR $HOME
COPY package.json .
RUN chown -R node:node $HOME/*
USER app
WORKDIR $HOME
RUN npm install --save --silent --progress=false
COPY . .
EXPOSE 3000
USER node
CMD [ "npm", "start" ]