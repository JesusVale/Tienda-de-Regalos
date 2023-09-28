const {Compra, ArticuloCompra} = require("../models")

class compraDAO{
    async crearCompra(id_usuario, metodo_pago, total, articulos){

        const transaction = await Compra.sequelize.transaction();

        try {
            const compra = await Compra.create({ id_usuario, metodo_pago, total }, { transaction });

            for (let i = 0; i < articulos.length; i++) {
                await ArticuloCompra.create({ 
                    id_articulo: articulos[i].id,
                    id_compra: compra.id,
                    cantidad: articulos[i].cantidad 
                }, { transaction });
            }

            await transaction.commit();

            return compra;
        } catch (error) {
            await transaction.rollback();

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
                throw new Error('Compra no encontrada');
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
module.exports = compraDAO;
