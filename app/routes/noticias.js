module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        const connection = application.config.db();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);
        noticiasModel.getNoticias(function (error, result){
            res.render("noticias/noticias", {noticias : result});
        })
    })

    application.get('/noticia', function (req, res) {

        const connection = application.config.db();
        const noticiasModel = new application.app.models.NoticiasDAO(connection);
        noticiasModel.getNoticia(2, function (error, result){
            res.render("noticias/noticia", {noticia : result});
        })
    })
}
