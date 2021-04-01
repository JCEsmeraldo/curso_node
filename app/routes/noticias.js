module.exports = function (application) {

    application.get('/noticias', function (req, res) {

        const connection = application.config.db();
        const noticiasModel = application.app.models.noticiasModel;
        noticiasModel.getNoticias(connection, function (error, result){
            res.render("noticias/noticias", {noticias : result});
        })
    })
}
