from controllers.ticketsController import ticketsController

def ticketsRoute(app):
    # Adicionar delete depois
    app.route('/ticket', methods=['POST', 'GET', 'DELETE'])(ticketsController)