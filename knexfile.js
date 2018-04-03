// Define DB connections for different environments
// usualy development, test and production environments

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/minirack_dev'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
//if we would have a test environment:
  // test: {
  //  client: 'pg',
  //  connection: 'postgres://localhost/dbname-test'
  // }
