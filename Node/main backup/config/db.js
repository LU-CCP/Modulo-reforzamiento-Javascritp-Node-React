const mongoose = require('mongoose');

class DataBase {
    constructor(dbName) {
        this.dbName = dbName;
    }

    async connet() {
        await mongoose.connect('mongodb://localhost', {
            dbName: this.dbName,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

module.exports = { DataBase };

