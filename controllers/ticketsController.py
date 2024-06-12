from flask import request
from database.db import db
from models.tickets import Ticket

def ticketsController():
    if request.method == "POST":
        try:
            data = request.get_json()
            print(data)
            ticket = Ticket(data['idrestaurante'], data['identregador'], data['idusuario'], data['descricao'])
            db.session.add(ticket)
            print(1)
            db.session.commit()
            return 'Ticket criado com sucesso', 200
        
        except Exception as erro:
            return 'Ticket não foi criado. Erro: {}'.format(str(erro)), 300
        

    elif request.method == "GET":
        try:
            data = Ticket.query.all()
            newData = {'ticket': [ticket.to_dict() for ticket in data]}
            return newData, 200
        
        except Exception as erro:
            return 'Não foi possivel buscar as informações do ticket. Erro: {}'.format(str(erro)),405
        
    elif request.method == 'DELETE':
         try:
              data = request.get_json()
              delete_ticket_id = data['id']
              ticket = Ticket.query.get(delete_ticket_id)
              if ticket is None:
                   return{'error': 'Ticket Não Enconrado'}, 404
              db.session.delete(ticket)
              db.session.commit()
              return 'Ticket deletado com sucesso.'
         except Exception as e:
              return 'O ticket não foi Atualizado. Erro: {}'.format(str(e)), 405