import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadEntregador() {

  const [entregador, setEntregador] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idrestaurante, setIDrestaurante] = useState(0);

  function getEntregador(){
    try {
      setTimeout(async () => {
        const response = await axios.get("http://localhost:300/entregador");
        setEntregador(response.data.entregador);
        setLoading(false);
      }, 1000)
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getEntregador();
  }, []);

  async function addEntregador(){
    try {
      const response = await axios.post("http://localhost:300/entregador", {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        idrestaurante: idrestaurante,
      });
      console.log(response);
      if (response.status === 200) alert("Entregador cadastrado com sucesso");
      getEntregador();
    } catch (error) {
        Error(error)     
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
    <Text style={{ fontSize: 24, fontWeight: "bold"}}>Cadastro de Entregador</Text>
    {loading && entregador.length === 0 ? (
      <Text style={{ fontSize: 14}}>Carregando...</Text >
    ) : (
      entregador.map((entregador) => {
        return (
          <View
            key={entregador.nome}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid red",
              gap: 10,
              flexDirection: "column"
            }}
          >
            <Text>Nome: {entregador.nome}</Text>
            <Text>Cpf: {entregador.cpf}</Text>
            <Text>Telefone: {entregador.telefone}</Text>
            <Text>ID do Restaurante: {entregador.idrestaurante}</Text>
          </View>
        );
      })
    )}
    
    <TextInput id='nome' value={nome} onChangeText={setNome} placeholder='Nome'/>
    <TextInput id='cpf' value={cpf} onChangeText={setCpf} placeholder='CPF'/>
    <TextInput id='telefone' value={telefone} onChangeText={setTelefone} placeholder='Telefone'/>
    <TextInput id='idrestaurante' value={idrestaurante} onChangeText={setIDrestaurante} placeholder='ID do Restaurante'/>
    
    <TouchableOpacity onPress={addEntregador}>Adicionar Entregador</TouchableOpacity>
    </ScrollView>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
