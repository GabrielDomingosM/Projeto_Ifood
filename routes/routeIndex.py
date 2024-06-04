from routes.usuariosRoutes import usuarioRoute
from routes.entregadoresRoutes import entregadorRoute

def routeIndex(app):
    usuarioRoute(app=app)
    entregadorRoute(app=app)