const {Usuario} = require("../models")

class UsuarioDAO {

    async crearUsuario(nombre, email, password, tipo, telefono){
        try{
            const usuario = await Usuario.create({nombre, email, password, tipo, telefono})
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarios(){
        try {
            const usuarios = await Usuario.findAll();
            return usuarios
        } catch(error){
            throw error;
        }
    }

    async obtenerUsuarioPorId(id){
        try{
            const usuario = await Usuario.findByPk(id);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async actualizarProductoPoId(id, nombre, email, password, tipo, telefono){
        try{
            await Usuario.update({nombre, email, password, tipo, telefono}, {where: id});
            const usuario = await Usuario.findByPk(id);
            return usuario;
        } catch(error){
            throw error;
        }
    }

    async eliminarUsuario(id){
        try{
            const usuario = await Usuario.findByPk(id);
            if(!producto){
                throw new Error("Producto No encontrado");
            }
            await usuario.destroy();
            return "Producto eliminado con éxito"
        } catch(error){
            throw error;
        }
    }
}

module.exports = UsuarioDAO;