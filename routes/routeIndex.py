from routes.usuariosRoutes import usuarioRoute
from routes.entregadoresRoutes import entregadorRoute
from routes.home import home

def routeIndex(app):
    usuarioRoute(app=app)
    entregadorRoute(app=app)
    home(app)
    
