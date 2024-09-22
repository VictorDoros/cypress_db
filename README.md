# DB testing
The purpose of this project is to demonstrate that Cypress is able to work with the database and it has the capability of working with SQL queries and creating tests depending on the given query. 
In this example, a single spec file has been created with 3 tests only, which sends a single query, but written in three different ways.

The platform https://db4free.net/ was used as the resource, which is easily to use and create a db for testing purposes for free (please follow the [documentation](https://db4free.net/)). 

# Prerequisites
* Node.js (v14.x or later)
* npm (v7.x or later)

# Installation
1. Clone the repo locally:
2. Navigate to the project directory and install the npm dependencies:
```
npm install
```
3. Run Cypress using one of the 2 options:

_Open mode:_
```
npx cypress open
```
_Headless mode:_
```
npx cypress run
```   
   
# Dependencies used within the project
1. mysql2 - [mysql2 documentation](https://www.npmjs.com/package/mysql2)
2. cypress-mochawesome-reporter - [cypress-mochawesome-reporter documentation](https://www.npmjs.com/package/cypress-mochawesome-reporter)
3. cy-spok - [cy-spok documentation](https://github.com/bahmutov/cy-spok)


