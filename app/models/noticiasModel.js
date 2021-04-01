module.exports = function () {

    this.getNoticias = function (connection, callback){
        connection.query('select * from tb_noticias', callback)
    };

    this.getNoticia = function (id, connection, callback){
        connection.query('select * from tb_noticias where id = ' + id, callback)
    };

    this.noticiaAdd = function (noticia, connection, callback){
        connection.query('INSERT INTO tb_noticias SET ?', noticia, callback)
    };

    return this;

}