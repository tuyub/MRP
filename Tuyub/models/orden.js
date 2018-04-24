var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var orden=new Schema({  //Creamos nuestra esquema
	producto:String,
	cantidad:String,
	categoria:String,
	fechalimite:String,
	cliente:String
	
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}s
*/

var ordenModel=mongoose.model("orden",orden);  //Exportamos nuestra esquema

module.exports=ordenModel;