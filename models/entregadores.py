from database.db import db

class Entregador(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'cpf': self.cpf,
            'telefone': self.telefone,
            'idrestaurante': self.idrestaurante
        }
    
    id = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    idrestaurante = db.Column(db.Integer(5))
    nome = db.Column(db.String(100))
    cpf = db.Column(db.String(20))
    telefone = db. Column(db.String(20))


    def __init__(self, nome, cpf, telefone, idrestaurante):
        self.nome = nome
        self.cpf = cpf
        self.telefone = telefone
        self.idrestaurante = idrestaurante
