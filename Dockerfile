FROM node:latest

# we will copy our project files here 
WORKDIR /usr/src/app

COPY package*.json ./

# Installs all of node packages we need
RUN npm install 

# Copy all of project files inside Docker Environment
COPY . ./

# Uses port 3000 to accessing container 
EXPOSE 3000

# Runs the application 
CMD [ "npm", "start" ]
