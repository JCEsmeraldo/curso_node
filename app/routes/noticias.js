module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        const mysql = require('mysql');
        const connection = mysql.createConnection({
            host : '127.0.0.1',
            user : 'root',
            password : 'admin',
            database: 'portal_noticias'
        })
        console.log(connection)
        connection.query('select * from tb_noticias', function (error, result){
            res.send(result);
            console.log(result)
        })


        // res.render("noticias/noticias")
    })
}
