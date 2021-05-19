docker-compose up -d db
export DB_HOST=localhost:3306
export DB_USER=db_user 
export DB_PASSWORD=password 
export DB_NAME=users_pref
npm test