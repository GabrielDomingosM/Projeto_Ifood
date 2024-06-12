from flask import request
from database.db import db
from models.restaurantes import Restaurante

def restauranteController():
    if request.method == "POST":
        try:
            print(1)
            data = request.get_json()
            print(data)
            restaurante = Restaurante(data['nome'], data['telefone'], data['endereco'], data['cnpj'], data['descricao'])
            db.session.add(restaurante)
            db.session.commit()
            return 'Restaurante adicionado com sucesso', 200
        
        except Exception as erro:
            return 'Restaurante não foi criado. Erro: {}'.format(str(erro)), 405
        

    elif request.method == "GET":
        try:
            data = Restaurante.query.all()
            newData = {'restaurantes': [restaurante.to_dict() for restaurante in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do restaurante. Erro: {}'.format(str(erro)),405