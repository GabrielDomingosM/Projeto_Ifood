from controllers.restaurantesController import restauranteController

def restauranteRoute(app):
    # Vou deixar só POST e GET por enquanto
    app.route('/restaurante', methods=['POST', 'GET'])(restauranteController)