require('dotenv').config();
const fs = require('fs');

class Database {
	create(data) {
		let database = this.read();
		database.push(data);
		const json = JSON.stringify(database);
		return fs.writeFileSync(process.env.DB_PATH, json, err => {
			if (err) return console.error(err);
		});
	}

	read() {
		let json = fs.readFileSync(process.env.DB_PATH);
		let data = JSON.parse(json);
		return data;
	}
}

module.exports = Database;
