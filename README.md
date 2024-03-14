# WT.CW2.00016599

## About this Event Planner Application

The event planner application, which is built using Express.Js, Node.JS, and Pug, helps users easily manage their events for the future and past. Users can create new events that include details such as event date, event time, event location, event description of the event, and event name. Additionally, the application allows users to update the details of existing events. Moreover, the user can delete events that are no longer relevant or have been cancelled. The application also provides users with the ability to read the events that have been created before.

## Instruction for running applications locally

1. Open a terminal or command prompt on your computer

2. Write the following command and run it to clone the repository from github
   git clone https://github.com/ezozbektoshev04/WT.CW2.00016599 // Repository link

3. After clonning, navigate the project directory
   cd WT.CW2.00016599 // write project name after "cd" command

4. Write the following command, and run it to install dependencies to install them
   npm i express express-validator pug body-parser nodemon

5. Write the following command, and run it to start the application
   npm start

6. Open http://localhost:4000/ this link on your web browser to use this application

## Application Dependencies' List

- Express - for building structured server-side app, controlling incoming requests and responses effectively.
- Express-validator - for validating input
- pug - for generating HTML views dynamically based on data.
- body-parser - installed but it is not used.
- nodemon - Restarts the server automatically when a file is changed.

## Links

GitHub: [Github link](https://github.com/ezozbektoshev04/WT.CW2.00016599)
Netlify:

## Project Structure

## Project Name

WT.CW2.00016599 => The folder name

## Controllers

- controllers/api/vents/index.js || controllers/web/home/index.js -
  This controllers folder which do controller logic is created to outlines utiliezed services to handle HTTP request and response.

## DB

- data/mock_db.json - This file includes array to store data which

## Routing

- routes/api/events/index.js || routes/api/index.js -
- routes/web/home/index.js || routes/web/index.js-
  it describes URL locations and the controller methods that go with them, sometimes with the help of validation middleware.

## Services

It contains essential service logic (such as `eventService` for CRUD application).

## Validitions

it contains Js file to utilize `express-validator` to implement input validation rules

## Views

It contains Pug files whic are responsible for user interface.

## Public

It contains folders and files which are resposible for Pug files view.

## App.js

The main application entry point, where a server begins, the routes are installed, the middleware is setup, and Express is configured.
