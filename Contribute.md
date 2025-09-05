## Manual installation 
 - Insall nodejs locally 
 - Clone the repo
 - Install dependecies (npm install)
 - start the DB locally
    - docker run -e POSTGRES_PASSWORD=mysecretpasword -d -p 5432:5432 postgres  
    - Go to neon.tech and get yourself a new DB
 - Change the .env file and uypdate your DB credentials
 - npx prsima migrate
 - npx prisma generate 
 - npm run build
 - npm run start

 ## Docker installation
 - Install docker 
 - create a network -  docker network create user_project
 - start postgres
    - docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
 - Build the image - `docker build --network=host -t user-project.`
 - start the image - `docker run -e DATABASE_URL= postgresql://postgres:mysecretpasword@localhost:5432/postgres --network user_project -p 3000:3000 user-project`



 ## Docker Compose installation steps
 - Install docker, docker-compose
 - Run `docker-compose up`