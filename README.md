# Project Readme

This readme file provides step-by-step instructions on how to set up and run the project. Please follow these instructions carefully to ensure a smooth setup process.

## Project Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/networkdavit/test_task_events.git
   ```
   
   Backend Setup
   
   ```
   cd test_task_events
   cd test_project
   composer install
   touch database/database.sqlite
   cp .env.example .env
    ```
    open .env file with your choice of editor ( for example subl .env)
    change DB_CONNECTION=mysql to DB_CONNECTION=sqlite
     ```
     DB_CONNECTION=sqlite
      ```
      in the terminal, write pwd (dir for windows)
      <br>
        output should be something like this - /Users/marat/work/lkj/test_task_events/test_project
        <br>
        copy that value and put it in DB_DATABASE, add database/database.sqlite in the end (for example DB_DATABASE = /Users/marat/work/lkj/test_task_events/test_project/database/database.sqlite)
        
     ```   
    DB_DATABASE=/path/to/your/project/directory/database/database.sqlite
    ```
    next, run the project
    ```
    php artisan migrate
    php artisan db:seed --class=EventsTableSeeder
    php artisan serve
    ```
    
    Frontend Setup
    
    ```
    cd test_project_front
    npm install
    npm start
    ```
    
    Open your browser and go to http://localhost:3000.

## Disclaimer
SQLite has been chosen for simplicity and ease of setup since this is a test project. If you encounter any database-related issues or if you prefer a different database engine, feel free to update the .env file and modify the database configuration accordingly.
    
For MySQL, change the DB_CONNECTION to mysql and update the DB_DATABASE, DB_USERNAME, and DB_PASSWORD settings accordingly.
    
        


