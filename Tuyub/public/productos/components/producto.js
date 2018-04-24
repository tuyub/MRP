(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngProducto",[
    function(){
        return{
            template:"{{producto.nombre}}, {{producto.formula}}, {{producto.cantidad}}, {{producto.almacen}},{{producto.fechaproducto}}, {{producto.fechacad}}<br/>"
        }
    }
    ]);
    
})();

	