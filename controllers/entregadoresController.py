from flask import request
from database.db import db
from models.entregadores import Entregador

def entregadorController():
    if request.method == "POST":
        try:
            data = request.get_json()
            print(data)
            entregador = Entregador(data['nome'], data['cpf'], data['telefone'], data['idrestaurante'])
            db.session.add(entregador)
            db.session.commit()
            return 'Usuario do entregador criado com sucesso', 200
        
        except Exception as erro:
            return 'Usuario do entregador não foi criado. Erro: {}'.format(str(erro)), 405
        

    elif request.method == "GET":
        try:
            data = Entregador.query.all()
            newData = {'entregador': [entregador.to_dict() for entregador in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do entregador. Erro: {}'.format(str(erro)),405
        
    elif request.method == 'DELETE':
         try:
              data = request.get_json()
              delete_entregador_id = data['id']
              entregador = Entregador.query.get(delete_entregador_id)
              if entregador is None:
                   return{'error': 'entregador Não Enconrado'}, 404
              db.session.delete(entregador)
              db.session.commit()
              return 'entregador deletado com sucesso.'
         except Exception as e:
              return 'O entregador não foi Atualizado. Erro: {}'.format(str(e)), 405