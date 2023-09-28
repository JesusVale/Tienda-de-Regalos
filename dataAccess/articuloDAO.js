const {Articulo} = require("../models")

class ArticuloDAO{

    async crearArticulo(descripcion, precio, imagen, stock){
        try{
            const articulo = await Articulo.create({descripcion, precio, imagen, stock})
            return articulo;
        } catch(error){
            throw error;
        }
    }

    async eliminarArticulo(id) {
        try {
            const articulo = await Articulo.findByPk(id);
            if (!articulo) {
                throw new Error('Artículo no encontrado');
            }
            await articulo.destroy();
        } catch (error) {
            throw error;
        }
    }

    async obtenerArticulo(id) {
        try {
            const articulo = await Articulo.findByPk(id);
            if (!articulo) {
                throw new Error('Artículo no encontrado');
            }

            return articulo;
        } catch (error) {
            throw error;
        }
    }

    async obtenerTodosLosArticulos() {
        try {
            const articulos = await Articulo.findAll();
            return articulos;
        } catch (error) {
            throw error;
        }
    }

    async actualizarComentarioPoId(id, descripcion, precio, imagen, stock){
        try{
            await Articulo.update({descripcion, precio, imagen, stock}, {where: id});
            const articulo = await Articulo.findByPk(id);
            return articulo;
        } catch(error){
            throw error;
        }
    }
    
}