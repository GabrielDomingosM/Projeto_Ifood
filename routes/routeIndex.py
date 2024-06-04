from routes.usuariosRoutes import usuarioRoute
from routes.entregadoresRoutes import entregadorRoute
from routes.home import home
def routeIndex(app):
    usuarioRoute(app=app)
<<<<<<< HEAD
    entregadorRoute(app=app)
=======
    entregadorRoute(app=app)
    home(app)
    
>>>>>>> e6a6ff6252a750bcb20e374aab0456f75c03bfaa
