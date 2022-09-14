FROM node

COPY ./ ./

RUN npm install -g @angular/cli

RUN npm start

EXPOSE 4200

#CMD ["npm", "start"]