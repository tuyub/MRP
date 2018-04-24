(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="formulaController";
app.controller(nombreControlador,
	['$routeParams','$location','formulaService',
	function(rp,l,service){
		var ctl=this;
		ctl.formulas={};
		ctl.formula={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.formula._id|| "",ctl.formula)
	        .then(function(data){
					ctl.formulas=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.formula=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		
		ctl.init();
	}]);
	
})();