from controllers.usuariosController import usuariosController

def usuariosRoute(app):
    # Vou deixar só POST e GET por enquanto
    app.route('/routes', methods=['POST', 'GET'])(usuariosController)