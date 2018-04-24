(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngMaterial",[
    function(){
        return{
            template:"{{material.nombre}}, {{material.cantidadexistente}}, {{material.ubicacion}}, {{material.estatus}},{{material.provedor}}<br/>"
        }
    }
    ]);
    
})();

	