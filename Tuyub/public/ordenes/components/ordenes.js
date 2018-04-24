(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngOrden",[
    function(){
        return{
            template:"{{orden.producto}}, {{orden.cantidad}}, {{orden.categoria}}, {{orden.fechalimite}},{{orden.cliente}}<br/>"
        }
    }
    ]);
    
})();

	