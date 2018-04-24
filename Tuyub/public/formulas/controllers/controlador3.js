(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};

    var nombreControlador3="Controlador3";
app.controller(nombreControlador3,
	['$scope','$http','idioma',
	function($s,$http, apiUrl){
		var ctl=this;
		ctl.formulas=[];
		
		ctl.init=function(){
			var request2={
				method:'GET',
				url:apiUrl+'/Api/formulas'

			};
			var request1={
				method:'POST',
				url:apiUrl+'/Api/formulas/',
				data:{"c.nombre":"",
				"c.material1":"",
				"c.material2":"",
				"c.producto":"",
				"c.numerodeserie":""
						}
			};

			//$http(request1).then(function(data1){
					$http(request2).then(function(data){
						ctl.formulas=data.data;
					},function(error){
						
					});
			//},function(error){
				
			//});
		}
					ctl.selectFormula = function(c){
					console.log(ctl.formulas.indexOf(c));
					ctl.formulas.splice(ctl.formulas.indexOf(c), 1);
					ctl.info = " Deleted Successfully!";
				};
		ctl.init();
	}
]);


    
})();