const { Client } = require("pg");

const client = new Client({
  user: "hzwzpovt",
  database: "hzwzpovt",
  host: "ohn.db.elephantsql.com",
  password: "wmKjlFMIpP72EPd-dPSzo5t98KY2wdiw",
  // port: "5432"
  connectionString:
    "postgres://hzwzpovt:wmKjlFMIpP72EPd-dPSzo5t98KY2wdiw@john.db.elephantsql.com:5432/hzwzpovt",
});
module.exports = client;
