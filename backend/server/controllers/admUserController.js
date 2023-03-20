class admUserController{
    buscar(){
        return "Buscando usuarios..."
    }
    criar(){
        return "criando usuario"
    }
    atualizar(id){
        return "Alterando usuario " + "id"
    }
    deletar(id){
        return "Deletando usuario " + "id"
    }
}

module.exports = new admUserController();