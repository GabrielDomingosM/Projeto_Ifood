from flask import request
from database.db import db
from models.usuarios import Usuario

def usuarioController():
    if request.method == "POST":
        try:
            data = request.get_json()
            usuario = Usuario(data['nome'])
            db.session.add(usuario)
            db.session.commit()
            return 'Usuario criado com sucesso', 200
        
        except Exception as erro:
            return 'Usuario não foi criado. Erro: {}'.format(str(erro)), 405
        

    elif request.method == "GET":
        try:
            data = Usuario.query.all()
            newData = {'usuarios': [usuario.to_dict() for usuario in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do usuario. Erro: {}'.format(str(erro)),405