// connect to DB here

const { Pool } = require('pg');
require('dotenv').config();
const url =
  'postgres://yypgkmjh:AaJqfhwESQgDVWFxX8K2LL3FwAvEaXGA@batyr.db.elephantsql.com/yypgkmjh';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: url,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
