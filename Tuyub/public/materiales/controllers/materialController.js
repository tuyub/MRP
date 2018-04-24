(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="materialController";
app.controller(nombreControlador,
	['$routeParams','$location','materialService',
	function(rp,l,service){
		var ctl=this;
		ctl.materiales={};
		ctl.material={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.material._id|| "",ctl.material)
	        .then(function(data){
					ctl.materiales=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.material=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		
		ctl.init();
	}]);
	
})();