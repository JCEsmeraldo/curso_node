const app = require("./config/server")

const rotaHome = require('./app/routes/home')(app)

const rotaNoticias = require('./app/routes/noticias')(app)

const rotaIncluirNoticia = require('./app/routes/incluir-noticia')(app)




app.listen(3000, function (){
    console.log("Servidor rodando")
})
