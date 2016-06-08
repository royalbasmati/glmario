var routes = require('./routes.js');
var bodyParser  = require('body-parser');
var ref = require('../server.js').ref;



module.exports = function (app, express) {
  
  //route for client
  // var listRouter = express.Router();

  //parse json
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  //serve index
  app.use(express.static(__dirname + '/../../client'));


  // app.use('/api/list', listRouter);

  // routes(listRouter);
  app.get('/api/list', function(){
  	ref.once("value", function(snapshot) {
  	console.log(snapshot.val());
	})
  })
  
};
