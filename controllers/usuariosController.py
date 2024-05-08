from flask import request
from database.db import db
from models.usuarios import Usuarios

def usuariosController():
    if request.method == "POST":
        try:
            data = request.get_json()
            usuarios = Usuarios(data['nome'])
            db.session.add(usuarios)
            db.session.commit()
            return 'Usuario criado com sucesso', 200
        
        except Exception as erro:
            return 'Usuario não foi criado. Erro: {}'.format(str(erro)), 405
        

    elif request.method == "GET":
        try:
            data = Usuarios.query.all()
            newData = {'usuarios': [usuarios.to_dict() for usuarios in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do usuario. Erro: {}'.format(str(erro)),405