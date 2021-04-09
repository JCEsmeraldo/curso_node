function NoticiasDAO(connection){
    this._connection = connection;
}


NoticiasDAO.prototype.getNoticias = function (callback){
    this._connection.query('select * from tb_noticias', callback)
};

NoticiasDAO.prototype.getNoticia = function (id, callback){
    this._connection.query('select * from tb_noticias where id = ' + id, callback)
};

NoticiasDAO.prototype.noticiaAdd = function (noticia, callback){
    this._connection.query('INSERT INTO tb_noticias SET ?', noticia, callback)
};

module.exports = function () {
    return NoticiasDAO;
}