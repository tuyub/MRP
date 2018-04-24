var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var producto=new Schema({  //Creamos nuestra esquema
	nombre:String,
	formula:String,
	cantidad:String,
	almacen:String,
	fechaproducto:String,
	fechacad:String
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}s
*/

var productoModel=mongoose.model("producto",producto);  //Exportamos nuestra esquema

module.exports=productoModel;