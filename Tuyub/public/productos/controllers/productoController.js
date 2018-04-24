(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="productoController";
app.controller(nombreControlador,
	['$routeParams','$location','productoService',
	function(rp,l,service){
		var ctl=this;
		ctl.productos={};
		ctl.producto={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.producto._id|| "",ctl.producto)
	        .then(function(data){
					ctl.productos=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.producto=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		
		ctl.init();
	}]);
	
})();