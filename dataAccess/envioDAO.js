const {Envio} = require("../models")
class EnvioDAO{

    async crearEnvio(id_articulo, estado, partida, destino, id_usuario){
        try{
            const envio = await Envio.create({id_articulo, estado, partida, destino, id_usuario})
            return envio;
        } catch(error){
            throw error;
        }
    }

    async obtenerEnvios(){
        try {
            const envios = await Envio.findAll();
            return envios;
        } catch(error){
            throw error;
        }
    }

    async obtenerEnvioPorId(id){
        try{
            const envio = await Envio.findByPk(id);
            return envio;
        } catch(error){
            throw error;
        }
    }

    async actualizarEnvioPoId(id, id_articulo, estado, partida, destino, id_usuario){
        try{
            await Envio.update({id_articulo, estado, partida, destino, id_usuario}, {where: id});
            const direccion = await Envio.findByPk(id);
            return direccion;
        } catch(error){
            throw error;
        }
    }

    async eliminarEnvio(id){
        try{
            const envio = await Envio.findByPk(id);
            if(!envio){
                throw new Error("Envio No encontrado");
            }
            await envio.destroy();
            return "Envio eliminado con éxito"
        } catch(error){
            throw error;
        }
    }

}

module.exports = EnvioDAO;