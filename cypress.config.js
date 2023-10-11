const { defineConfig } = require("cypress")
const mysql = require("mysql2")

//For connecting to SQL Server
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env: {
    db: {
      host: "db4free.net",
      user: "admin110011",
      password: "admin123456",
      database: "cypress_db",
      port: 3306,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config)
        },
      })
      require("cypress-mochawesome-reporter/plugin")(on)
      return config
      // implement node event listeners here
    },
    // Path to e2e tests
    specPattern: "cypress/e2e",

    // Time, in milliseconds, to consider a test "slow" during cypress run. A slow test will display in orange text in the default reporter.
    slowTestThreshold: 15000,

    // Time, in milliseconds, to wait until most DOM based commands are considered timed out.
    defaultCommandTimeout: 2000,

    // The quality setting for the video compression, in Constant Rate Factor (CRF).
    // The value can be false to disable compression or a value between 0 and 51,
    // where a lower value results in better quality (at the expense of a higher file size).
    videoCompression: 32,

    // Default height in pixels
    viewportHeight: 1080,

    // Default width in pixels
    viewportWidth: 1920,

    //Setting video to false (it takes time while running a test suite, even if there is no error)
    video: false,
  },
})
