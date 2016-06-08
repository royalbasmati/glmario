var ref = require('../server.js').ref;
// console.log('ref', ref);

module.exports = {

	getList: function(rq, res, next){
		// dbList
		console.log('getList');
		
	},

	addItem: function(req, res, next, item){

		// ref.set({item:'eggs'});
		console.log('addItem', ref);
	}
}