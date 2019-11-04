const pgp = require("pg-promise")({
    query: function(e) {
        console.log("QUERY:", e.query);
    }
});

const options = {
    host: "sean-psql-db.cfb79isgc7js.us-east-2.rds.amazonaws.com",
    database: "apple_ceos",
    user: "postgres",
    password: "60ZCdMYdUo#y"
};

const db = pgp(options);

module.exports = db;
