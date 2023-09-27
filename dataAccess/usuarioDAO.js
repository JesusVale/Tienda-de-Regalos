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
}

module.exports = UsuarioDAO;