FROM node:16.14.0  
   
 RUN mkdir -p /usr/src/app  
 RUN npm install nodemon -g  
   
 WORKDIR /usr/src/app  
 COPY . .  
 RUN npm install -g  
   
 EXPOSE 3000    
   
 CMD ["npm", "start"]  
