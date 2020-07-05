// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();


// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// ------------------------
// ROUTES RESOURCES
// ------------------------
app.get('/', (req,res)=>{
	console.log('hello');
	res.status(200).json({"hello1" : "w1orld1"});
})

// ------------------------
// START SERVER
// ------------------------
app.listen(3011,function(){
    console.info('HTTP server started on port 3011');
});
