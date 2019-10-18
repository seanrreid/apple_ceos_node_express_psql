const db = require("./conn");

class ExecutiveList {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM ceos;`);
            return response;
        } catch (error) {
            return error.message;
        }
    }

    async save() {
        try {
            const response = await db.result(`INSERT INTO ceos (name, year) VALUES ($1, $2)`, [this.name, this.year]);
            return response;
        } catch(error) {
            return error.message;
        }
    }
}
module.exports = ExecutiveList;
