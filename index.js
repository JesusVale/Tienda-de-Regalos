const {sequelize} = require("./models")
const UsuarioDAO = require("./dataAccess/usuarioDAO")
const ArticuloDAO = require("./dataAccess/articuloDAO")
const CompraDAO = require("./dataAccess/compraDAO")

async function realizarTransacciones(){

    await sequelize.sync();

    const usuarioDAO = new UsuarioDAO();
    const articuloDAO = new ArticuloDAO();
    const compraDAO = new CompraDAO();

    //Crear Producto
    /*const usuario = await usuarioDAO.crearUsuario("Usuario1", "user@gmail.com", "123456", "normal", 6441715444);
    console.log(`Usuario Creado: ${usuario.toJSON()}`)*/

    //Crear Articulos
    /*const articulo = await articuloDAO.crearArticulo("Soy el articulo 1", 101, "https://pbs.twimg.com/media/F7D8xy8WoAAbNXe?format=jpg&name=medium", 22);
    const articulo2 = await articuloDAO.crearArticulo("Soy el articulo 2", 300, "https://pbs.twimg.com/media/F7D8xy8WoAAbNXe?format=jpg&name=medium", 33);
    const articulo3 = await articuloDAO.crearArticulo("Soy el articulo 3", 404, "https://pbs.twimg.com/media/F7D8xy8WoAAbNXe?format=jpg&name=medium", 23);*/


    //Crear Compra
    const compra = await compraDAO.crearCompra(1, "Tarjeta", 500, [
        {id: 1, cantidad: 3},
        {id:3, cantidad: 2}
    ])


    
}

realizarTransacciones();