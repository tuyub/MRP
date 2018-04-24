(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.ordenes=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/ordenes'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/ordenes/',
				data:{"c.producto":"",
				"c.cantidad":"",
				"c.categoria":"",
				"c.fechalimite":"",
				"c.cliente":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.ordenes=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
					ctl.selectOrden = function(c){
					console.log(ctl.ordenes.indexOf(c));
					ctl.ordenes.splice(ctl.ordenes.indexOf(c), 1);
					ctl.info = " Deleted Successfully!";
				};
		ctl.init();
	}
]);


    
})();