from controllers.restaurantesController import restauranteController

def restauranteRoute(app):
    app.route('/restaurante', methods=['POST', 'GET', 'DELETE'])(restauranteController)