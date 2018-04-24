(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
var nombreControlador="ventaController";
app.controller(nombreControlador,
	['$routeParams','$location','clienteService',
	function(rp,l,service){
		var ctl=this;
		ctl.ventas={};
		ctl.venta={};
		
		ctl.guardar=function(frm){
		    
	        service.insertOrUpdate(ctl.venta._id|| "",ctl.venta)
	        .then(function(data){
					ctl.ventas=data.data;
					l.path('/tres');
				},function(error){
					alert("Error en el servidor");
				});
				
		};
		
		ctl.init=function(){
		    //var _id=parseInt(rp.id);
		    if(rp && rp.id && rp.id.length>0){
		        service.getById(rp.id).then(function(data){
						ctl.venta=data.data[0];
					},function(error){
						alert("Error en el servidor");
					});
		    }
		}
		ctl.init();
	}]);
	
})();