(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="ordenController";
app.controller(nombreControlador,
	['$routeParams','$location','ordenService',
	function(rp,l,service){
		var ctl=this;
		ctl.ordenes={};
		ctl.orden={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.orden._id|| "",ctl.orden)
	        .then(function(data){
					ctl.ordenes=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.orden=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		
		ctl.init();
	}]);
	
})();