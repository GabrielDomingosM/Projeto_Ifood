from database.db import db

class Usuario(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'cpf': self.cpf,
            'endereco': self.endereco,
            'telefone': self.telefone
        }
    
    id = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    nome = db.Column(db.String(100))
    cpf = db.Column(db.String(20))
    endereco = db.Column(db.String(20))
    telefone = db. Column(db.String(20))

    def __init__(self, nome, cpf, endereco, telefone):
        self.nome = nome
        self.cpf = cpf
        self.endereco = endereco
        self.telefone = telefone