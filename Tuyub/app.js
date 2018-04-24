
var express = require('express');  //Definicion de variables para cargarlas a express --
var app = express(); 
var server = app.listen(8000);

var path= require("path");

var mongoose = require('mongoose'); //Este es importante pa cargar base de datos mongodb
var bodyparser = require('body-parser'); //Cargamos bodyParser

//var Cliente=require("./models/tarea"); //Cargamos nuestro modelos que definimos
var Producto=require("./models/producto");
var Material=require("./models/material");
var Orden=require("./models/orden");
var Formula=require("./models/formula");



mongoose.connect("mongodb://localhost:27017/productos");


app.get("/", function(req,res){
	res.end("Hola Mundo");

});

app.use(bodyparser.json());


//app.listen(8080, function () {
  //console.log('El servidor esta corriendo en el puerto 8080!');
//});




var publicFolder=path.resolve(__dirname, "public");
app.use(express.static(publicFolder));


var publicFolder=path.resolve(__dirname, "public/app");
app.use(express.static(publicFolder));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine","ejs");
app.get('/hola/:quien', function (req, resp) {
	resp.render("hola",{message:req.params.quien});
});





//Consultar todos productos
app.get('/Api/productos/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Producto.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});




//Consultar por id
app.get('/Api/productos/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Producto.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/productos/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Producto.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombre=req.body.nombre;
				result.formula=req.body.formula;
				result.cantidad=req.body.cantidad;
				result.almacen=req.body.almacen;
				result.fechaproducto=req.body.fechaproducto;
				result.fechacad=req.body.fechacad;
				
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Producto(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});


//Consultar todos materiales
app.get('/Api/materiales/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Material.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});




//Consultar por id
app.get('/Api/materiales/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Material.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/materiales/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Material.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombre=req.body.nombre;
				result.cantidadexistente=req.body.cantidadexistente;
				result.ubicacion=req.body.ubicacion;
				result.estatus=req.body.estatus;
				result.provedor=req.body.provedor;
				
				
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Material(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});


//Consultar todos las ordenes
app.get('/Api/ordenes/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Orden.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});




//Consultar por id
app.get('/Api/ordenes/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Orden.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/ordenes/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Orden.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.producto=req.body.producto;
				result.cantidad=req.body.cantidad;
				result.categoria=req.body.cetegoria;
				result.fechalimite=req.body.fechalimite;
				result.cliente=req.body.cliente;
				
				
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Orden(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});


//Consultar todos las formulas
app.get('/Api/formulas/', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		//var t=new Cliente(req.body);
		Formula.find(function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});




//Consultar por id
app.get('/Api/formulas/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		console.log(req.params.id);
		//var t=new Cliente(req.body);
		Formula.find(
			{_id:req.params.id},
			function(err,results){
			if(err){
				resp.send({save:"No se pudo realizar la consulta"});
			}
			resp.json(results);
		});
		//resp.send({save:"Ok"});
});

//T A R E A  :  Implementar hasta el actualizar tarea
app.post('/Api/formulas/:id', 
	function (req, resp) { //Ruteo y guardar en base de datos
		//console.log();
		if(req.params.id.length>2){
			Formula.findOne({_id:req.params.id},function(err,result){
				//console.log(result);
				if(err){
					resp.send({save:"No se pudo realizar la consulta"});
				}
				result.nombre=req.body.nombre;
				result.material1=req.body.material1;
				result.material2=req.body.material2;
				result.producto=req.body.producto;
				result.numerodeserie=req.body.numerodeserie;
				
				
				result.save();
				resp.json(result);
			}
			);
		}else{
			var c=new Formula(req.body);
			c.save();
			resp.send({saved:"Ok"});
		}
		
		
});


var io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});



		