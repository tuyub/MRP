var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var material=new Schema({  //Creamos nuestra esquema
	nombre:String,
	cantidadexistente:String,
	ubicacion:String,
	estatus:String,
	provedor:String
	
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}s
*/

var materialModel=mongoose.model("material",material);  //Exportamos nuestra esquema

module.exports=materialModel;