const e = require('express');
const express = require('express');
const app = express();

const port = process.env.PORT ||3000;

// Conexión a Base de Datos
const mongoose = require('mongoose');
const user = '';
const password = '';
const uri = '';
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

	.then(() => console.log('Base de datos conectada'))
	.catch(e => console.log(e))

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'))

//Rutas Web
app.use('/', require('./router/RutasWeb'));
app.use('/mascotas', require('./router/Mascotas')),

app.use((req,res,next)=>{
	res.status(404).render('404',{
		titulo:'404',
		descripcion:'Titulo del sitio Web'
	})
})

app.listen(port,() =>{
	console.log('servidor a su servicio en el puerto:', port)
	
})
	