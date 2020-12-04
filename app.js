const express = require('express');
const app = express();

const port = 3000;

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'))


app.get('/',(req,res)=>{
	res.render('index', {titulo:'Mi titulo dinamico'})
})

app.get('/servicios',(req,res)=>{
	res.render('servicios', {tituloServicios:'Este es un mensaje dinámico de servicios'})
})

app.use((req,res,next)=>{
	res.status(404).render('404',{
		titulo:'404',
		descripcion:'Titulo del sitio Web'
	})
})

app.listen(port,() =>{
	console.log('servidor a su servicio en el puerto:', port)
	
})
	