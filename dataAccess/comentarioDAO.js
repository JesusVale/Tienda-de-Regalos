const {Comentario} = require("../models")


class ComentarioDAO{

    async crearComentario(id_usuario, rating, descripcion){
        try{
            const comentario = await Comentario.create({id_usuario, rating, descripcion})
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async obtenerComentarios(){
        try {
            const comentarios = await Comentario.findAll();
            return comentarios;
        } catch(error){
            throw error;
        }
    }

    async obtenerComentarioPorId(id){
        try{
            const comentario = await Comentario.findByPk(id);
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async actualizarComentarioPoId(id, id_usuario, rating, descripcion){
        try{
            await Comentario.update({id_usuario, rating, descripcion}, {where: id});
            const comentario = await Comentario.findByPk(id);
            return comentario;
        } catch(error){
            throw error;
        }
    }

    async eliminarComentario(id){
        try{
            const comentario = await Comentario.findByPk(id);
            if(!comentario){
                throw new Error("Comentario no encontrado");
            }
            await comentario.destroy();
            return "Comentario eliminado con éxito"
        } catch(error){
            throw error;
        }
    }
    
}
module.exports = ComentarioDAO;