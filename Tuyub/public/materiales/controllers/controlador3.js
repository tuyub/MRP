(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.materiales=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/materiales'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/materiales/',
				data:{"c.nombre":"",
				"c.cantidadexistente":"",
				"c.ubicacion":"",
				"c.estatus":"",
				"c.provedor":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.materiales=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
					ctl.selectMaterial = function(c){
					console.log(ctl.materiales.indexOf(c));
					ctl.materiales.splice(ctl.materiales.indexOf(c), 1);
					ctl.info = " Deleted Successfully!";
				};
		ctl.init();
	}
]);


    
})();