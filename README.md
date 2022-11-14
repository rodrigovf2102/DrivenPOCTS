# DrivenPOCTS

Back-end API, a solution to control home tasks. 

## About

DrivenPOCTS is a API for storage, insert and update home tasks by residents.

## How to run:

1. Clone this repository;
2. Install all dependencies: 'npm i';
3. Open PSQL by PgAdmin or Terminal
4. Create a PSQL database with name: 'drivenpocts';
5. Copy all info of dump.sql file that is not a comment and paste the info on a script;
6. Run the script;
7. Go to the file: ...src/database/database.ts, and insert your info for host, user, password;
8. On terminal insert: 'npm start';

## How to use:

1. After starting, API can be used on ThunderClient or other similar application;
2. The route (get) '/taks' returns all home tasks registred;
3. The route (post) '/addTask' insert a task, password of 'responsible' is required and have to be send by 'headers', 'authorization';
    ```
    Object espected on body:{
      name: ...,
      description: ...,
      day: ...,
      idResponsible: ...,
      status: ...
    }
    ```
4. The route (post) '/addResponsible' insert a responsible and returns the new responsible password;
    ```
    Object espected on body:{
      name:...,
      age:...,
      token:...
    }
    ```
5. The route (put) '/completeTask/:taskId' set task status to true, that means task is completed, needs the taskId to be updated;
6. The route (delete) '/deleteTask/:taskId' delete a task, needs the taskId to be deleted;
7. The route (get) '/taskInfo' returns quantity of tasks by users, if the user has no tasks he will not be showed;
