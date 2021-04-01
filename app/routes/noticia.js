module.exports = function (application) {

    application.get('/noticia', function (req, res) {

        const connection = application.config.db();
        const noticiasModel = application.app.models.noticiasModel;
        noticiasModel.getNoticia(2, connection, function (error, result){
            res.render("noticias/noticia", {noticia : result});
        })


        // res.render("noticias/noticias")
    })
}
