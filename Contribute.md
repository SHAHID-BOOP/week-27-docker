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



## Docker Compose installation steps