const fs = require('fs');

class Database {
	create(data) {
		const json = JSON.stringify(data);
		return fs.writeFileSync(`./src/db/users.json`, json, err => {
			if (err) return console.error(err);
		});
	}
}

module.exports = Database;
