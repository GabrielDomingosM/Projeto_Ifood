from controllers.usuariosController import usuarioController

def usuarioRoute(app):
    # Vou deixar só POST e GET por enquanto
    app.route('/usuario', methods=['POST', 'GET', 'DELETE'])(usuarioController)