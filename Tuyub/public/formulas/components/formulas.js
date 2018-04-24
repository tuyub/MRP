(function () {
    'use strict';
    
/*global angular*/
var app = 	angular.module('myApp') || {};
app.directive("ngFormula",[
    function(){
        return{
            template:"{{formula.nombre}}, {{formula.material1}}, {{formula.material2}}, {{formula.producto}},{{formula.numerodeserie}}<br/>"
        }
    }
    ]);
    
})();

	