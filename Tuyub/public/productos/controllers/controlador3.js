(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.productos=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/productos'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/productos/',
				data:{"c.nombre":"",
				"c.formula":"",
				"c.cantidad":"",
				"c.almacen":"",
				"c.fechaproducto":"",
				"c.fechacad":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.productos=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
					ctl.selectProducto = function(c){
					console.log(ctl.productos.indexOf(c));
					ctl.productos.splice(ctl.productos.indexOf(c), 1);
					ctl.info = " Deleted Successfully!";
				};
		ctl.init();
	}
]);


    
})();