from flask import request
from database.db import db
from models.entregadores import Entregador

def entregadoresController():
    if request.method == "POST":
        try:
            data = request.get_json()
            entregadores = Entregador(data['nome'])
            db.session.add(entregadores)
            db.session.commit()
            return 'Usuario do entregador criado com sucesso', 200
        
        except Exception as erro:
            return 'Usuario do entregador não foi criado. Erro: {}'.format(str(erro)), 405
        

    elif request.method == "GET":
        try:
            data = Entregador.query.all()
            newData = {'entregadores': [entregadores.to_dict() for entregadores in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do entregador. Erro: {}'.format(str(erro)),405