module.exports = function (application) {
    application.get('/incluir-noticia', function (req, res) {
        res.render("admin/form_add_noticia")
    })

    application.post('/noticias/salvar', function (req, res) {
        const noticia = req.body;

        const connection = application.config.db();
        const noticiasModel = application.app.models.noticiasModel;

        noticiasModel.noticiaAdd(noticia, connection, function (error, result){
            res.redirect("/noticias");
        })
    })
}
