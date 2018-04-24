(function () {
    'use strict';
/*global angular*/
var app = 	angular.module('myApp',['ngRoute']);

app.constant("idioma","");
app.constant('area',function(radio){
	return (3.1416)*radio*radio;	
});

app.value("apiToken","FDfdcsdfddgdfgdfgddfdgsgghj");


app.value("apiToken","http://192.168.3.2:3000"); //inventarios
app.value("apiToken","http://192.168.3.163:5050");//compra
app.value("apiToken","urlEmpleados=http://192.168.3.184:8000");// empleados


app.config(["$routeProvider", function(rutas){
	rutas
	/*.when("/:id/:precio/:existencias",{
		templateUrl:"./views/vista1.html",
		controller:"Controlador1",
		controllerAs:"ctl"
	})*/
	.when("/home",{
		templateUrl:"./views/home.html",
		controller:"Controlador1",
		controllerAs:"ctl"
	})
	
	.when("inicio",{
		templateUrl:"./views/inicio.html",
		controller:"",
		controllerAs:""
	})
	/*.when("/dos",{
		templateUrl:"./views/vista2.html",
		controller:"Controlador1",
		controllerAs:"ctl"
	})*/
	.when("/tres",{
		templateUrl:"./views/vista3.html",
		controller:"Controlador3",
		controllerAs:"ctl"
	})
	.when("/producto/:id",{
		templateUrl:"./views/producto.html",
		controller:"productoController",
		controllerAs:"ctl"
	})
	.when("/venta/:id",{
		templateUrl:"./views/venta.html",
		controller:"ventaController",
		controllerAs:"ctl"
	})
	.when("/listaVenta",{
		templateUrl:"./views/listaVenta.html",
		controller:"Controlador4",
		controllerAs:"ctl"
	})
	
	.when("/weather",{
		templateUrl:"./views/weather.html",
		controller:"theweather",
		controllerAs:"obj"
	})
}]);


})();

