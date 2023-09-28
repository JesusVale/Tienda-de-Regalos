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

    async actualizarArticulo(id, nuevaDescripcion, nuevoPrecio, nuevaImagen, nuevoStock) {
        try {
            const [numRowsUpdated, updatedArticulo] = await Articulo.update(
                {
                    descripcion: nuevaDescripcion,
                    precio: nuevoPrecio,
                    imagen: nuevaImagen,
                    stock: nuevoStock,
                },
                {
                    where: { id },
                    returning: true, 
                }
            );

            if (numRowsUpdated === 0) {
                throw new Error('Artículo no encontrado');
            }

            return updatedArticulo[0];
        } catch (error) {
            throw error;
        }
    }
    
}