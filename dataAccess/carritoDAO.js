const {Carrito} = require("../models")
class CarritoDAO{
    async crearCarrito(id_articulo, id_usuario){
        try{
            const carrito = await Carrito.create({id_articulo, id_usuario})
            return carrito;
        } catch(error){
            throw error;
        }
    }
    async obtenerCarritos(){
        try {
            const carritos = await Carrito.findAll();
            return carritos;
        } catch(error){
            throw error;
        }
    }
    async obtenerCarritoPorID(id){
        try{
            const carrito = await Carrito.findByPk(id);
            return carrito;
        } catch(error){
            throw error;
        }
    }
    async actualizarCarritoPoId(id, id_usuario,id_articulo){
        try{
            await Carrito.update({id_articulo, id_usuario}, {where: id});
            const carrito = await Carrito.findByPk(id);
            return carrito;
        } catch(error){
            throw error;
        }
    }
    async eliminarCarrito(id){
        try{
            const carrito = await Carrito.findByPk(id);
            if(!carrito){
                throw new Error("Carrito no encontrado");
            }
            await carrito.destroy();
            return "Carrito eliminado con éxito"
        } catch(error){
            throw error;
        }
    }
}
module.exports = CarritoDAO;
