const {Direccion} = require("../models")

class DireccionDAO {

    async crearDireccion(calle, colonia, ciudad, codigo_postal, numero_exterior){
        try{
            const direccion = await Direccion.create({calle, colonia, ciudad, codigo_postal, numero_exterior})
            return direccion;
        } catch(error){
            throw error;
        }
    }

    async obtenerDireccion(){
        try {
            const direcciones = await Direccion.findAll();
            return direcciones;
        } catch(error){
            throw error;
        }
    }

    async obtenerDireccionPorId(id){
        try{
            const direccion = await Direccion.findByPk(id);
            return direccion;
        } catch(error){
            throw error;
        }
    }

    async actualizarDireccionPoId(id, calle, colonia, ciudad, codigo_postal, numero_exterior){
        try{
            await Direccion.update({calle, colonia, ciudad, codigo_postal, numero_exterior}, {where: id});
            const direccion = await Direccion.findByPk(id);
            return direccion;
        } catch(error){
            throw error;
        }
    }

    async eliminarDireccion(id){
        try{
            const direccion = await Direccion.findByPk(id);
            if(!direccion){
                throw new Error("Dirección No encontrada");
            }
            await direccion.destroy();
            return "Direccion eliminada con éxito"
        } catch(error){
            throw error;
        }
    }
}

module.exports = DireccionDAO;