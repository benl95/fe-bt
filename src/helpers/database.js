require('dotenv').config();
const fs = require('fs');

class Database {
	create(data) {
		const json = JSON.stringify(data);
		return fs.writeFileSync(process.env.DB_PATH, json, err => {
			if (err) return console.error(err);
		});
	}
}

module.exports = Database;
