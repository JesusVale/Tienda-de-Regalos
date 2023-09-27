const {sequelize} = require("./models")
const UsuarioDAO = require("./dataAccess/usuarioDAO")


async function realizarTransacciones(){

    await sequelize.sync();
         
    const usuarioDAO = new UsuarioDAO();

    //Crear Producto
    const usuario = await usuarioDAO.crearUsuario("Usuario1", "user@gmail.com", "123456", "normal", 6441715444);
    console.log(`Usuario Creado: ${usuario.toJSON()}`)

    
}

realizarTransacciones();