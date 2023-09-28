const {Compra} = require("../models")

class compraDAO{
    async crearCompra(id_usuario, metodo_pago, total){
        try{
            const compra = await Compra.create({id_usuario, metodo_pago, total})
            return compra;
        } catch(error){
            throw error;
        }
    }
    async eliminarCompra(id) {
        try {
            const compra = await Compra.findByPk(id);
            if (!compra) {
                throw new Error('Compra no encontrada');
            }
            await compra.destroy();
        } catch (error) {
            throw error;
        }
    }
    async obtenerCompra(id) {
        try {
            const compra = await Compra.findByPk(id);
            if (!compra) {
                throw new Error('Artículo no encontrado');
            }

            return compra;
        } catch (error) {
            throw error;
        }
    }

    async obtenerTodasLasCompras() {
        try {
            const compra = await Compra.findAll();
            return compra;
        } catch (error) {
            throw error;
        }
    }

    async actualizarCompraPoId(id_usuario, metodo_pago, total){
        try{
            await Compra.update({id_usuario, metodo_pago, total}, {where: id});
            const compra = await Compra.findByPk(id);
            return compra;
        } catch(error){
            throw error;
        }
    }
}
