from controllers.usuariosController import usuarioController

def usuarioRoute(app):
    # Vou deixar só POST e GET por enquanto
    app.route('/routes', methods=['POST', 'GET'])(usuarioController)