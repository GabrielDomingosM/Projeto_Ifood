from flask import request
from database.db import db
from models.usuarios import Usuario

def usuarioController():
    if request.method == "POST":
        try:
            print(1)
            data = request.get_json()
            print(data)
            usuario = Usuario(data['nome'], data['cpf'], data['endereco'], data['telefone'])
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
        
    elif request.method == 'DELETE':
         try:
              data = request.get_json()
              delete_usuario_id = data['id']
              usuario = usuario.query.get(delete_usuario_id)
              if usuario is None:
                   return{'error': 'Usuario não encontrado'}, 404
              db.session.delete(usuario)
              db.session.commit()
              return 'Usuario deletado com sucesso.'
         except Exception as e:
              return 'O Usuario não foi Deletado. Erro: {}'.format(str(e)), 405