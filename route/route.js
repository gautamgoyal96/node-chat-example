home = require("../app/ctrl/home.js");

module.exports = function(app) {
	
	app.get('/', home.home);

}