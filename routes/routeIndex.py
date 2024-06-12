from routes.usuariosRoutes import usuarioRoute
from routes.entregadoresRoutes import entregadorRoute
from routes.restaurantesRoutes import restauranteRoute
from routes.home import home

def routeIndex(app):
    usuarioRoute(app=app)
    entregadorRoute(app=app)
    restauranteRoute(app=app)
    home(app)
    
