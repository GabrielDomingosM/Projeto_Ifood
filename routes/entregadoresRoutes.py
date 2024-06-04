from controllers.entregadoresController import entregadorController

def entregadorRoute(app):
    # Vou deixar só POST e GET por enquanto
    app.route('/entregador', methods=['POST', 'GET'])(entregadorController)