//routes
var listController = require('../list/listController.js');

module.exports = function(app) {

	//list routes
	app.route('/')
		//get the saved list
		.get(listController.getList)

		//post to the saved list
		.post(listController.addItem)

}