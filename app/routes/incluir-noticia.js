module.exports = function (app) {
    app.get('/incluir-noticia', function (req, res) {
        res.render("admin/form_add_noticia")
    })
}
