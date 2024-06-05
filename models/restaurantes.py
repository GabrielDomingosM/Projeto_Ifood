from database.db import db

class Restaurante(db.Model):
    def to_dict(self):
        return {
            'id': self.id,
            'nome': self.nome,
            'telefone': self.telefone,
            'endereco': self.endereco,
            'cnpj': self.cnpj,
            'descricao': self.descricao
        }
    
    id = db.Column(db.Integer, primary_key = True, unique = True, nullable = False)
    nome = db.Column(db.String(100))
    telefone = db. Column(db.String(20))
    endereco = db.Column(db.String(20))
    cnpj = db.Column(db.String(20))
    descricao = db. Column(db.String(100))

    def __init__(self, nome, cnpj, endereco, telefone, descricao):
        self.nome = nome
        self.telefone = telefone
        self.endereco = endereco
        self.cnpj = cnpj
        self.descricao = descricao