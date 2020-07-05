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
var temp = [{
	"id" : "1",
	"nom" : "breda",
	"prenom" : "laurent",
	"ssn" : "1829913150257"
}]


app.get('/patients',(req, res)=>{
	res.status(200).json(temp)
})

app.post('/patients',(req, res)=>{
	res.status(200).json(req.body)
})

app.get('/patients/:idPatient',(req, res)=>{
	res.status(200).json(temp.pop())
})

app.put('/patients/:idPatient',(req, res)=>{
	res.status(204).json()
})

app.delete('/patients/:idPatient',(req, res)=>{
	res.status(204).json()
})

// ------------------------
// START SERVER
// ------------------------
app.listen(3011,function(){
    console.info('HTTP server started on port 3011');
});
