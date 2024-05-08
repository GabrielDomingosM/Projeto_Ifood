from routes.usuariosRoutes import usuariosRoute
from routes.entregadoresRoutes import entregadorRoute

def routeIndex(app):
    usuariosRoute(app=app)
    entregadorRoute(app=app)