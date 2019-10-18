const pgp = require("pg-promise")({
    query: function(e) {
        console.log("QUERY:", e.query);
    }
});

const options = {
    host: "localhost",
    database: "apple_ceos"
};

const db = pgp(options);

module.exports = db;
