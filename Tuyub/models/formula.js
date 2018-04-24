var mongoose = require('mongoose'), //cargamos la biblioteca
 Schema = mongoose.Schema; 

var formula=new Schema({  //Creamos nuestra esquema
	nombre:String,
	material1:String,
	material2:String,
	producto:String,
	numerodeserie:String
	
	
	//usuario:{nombre:String}
	//calificaciones=[{usuario:String, evaluacion:Number}]

});

/*
tarea.validarNombre=function(){  //Valida que la tarea tenga por lo menos 3 caracteres
	
}

tarea.methods.validarNombre=function(){  

}s
*/

var formulaModel=mongoose.model("formula",formula);  //Exportamos nuestra esquema

module.exports=formulaModel;