const {check, body, validationResult} = require('express-validator');

module.exports = function (application) {
    application.get('/incluir-noticia', function (req, res) {
        application.app.controllers.admin.incluir_noticia(application, req, res);
    })

    application.post('/noticias/salvar',
        body('titulo', "Titulo é obrigatorio!").not().isEmpty(),
        body('resumo', "Resumo é obrigatorio!").not().isEmpty(),
        body('noticia', "Noticia é obrigatorio!").not().isEmpty(),
        body('resumo', "Resumo deve conter entre 10 a 100 caracteres!")
            .isLength({min: 10, max: 100}),
        body('autor', "Autor é obrigatorio!").not().isEmpty(),
        body('data_noticia', "Data é obrigatorio!").not().isEmpty()
            .isDate({format: 'YYYY-MM-DD'}),

        (req, res) => {
            const noticia = req.body;

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.render("admin/form_add_noticia", {validacao: errors.array(), noticia: noticia})
                return;
            }

            const connection = application.config.db();
            const noticiasModel = new application.app.models.NoticiasDAO(connection);

            noticiasModel.noticiaAdd(noticia, function (error, result) {
                res.redirect("/noticias");
            })
        })


}
