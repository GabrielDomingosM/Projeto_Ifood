from database.db import db

class Ticket(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'idrestaurante': self.idrestaurante,
            'identregador': self.identregador,
            'idusuario': self.idusuario,
            'descricao': self.descricao
        }
    
    id = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    idrestaurante = db.Column(db.Integer)
    identregador = db. Column(db.Integer)
    idusuario = db.Column(db.Integer)
    descricao = db. Column(db.String(100))

    def __init__(self, idrestaurante, identregador, idusuario, descricao):
        self.idrestaurante = idrestaurante
        self.identregador = identregador
        self.idusuario = idusuario
        self.descricao = descricao