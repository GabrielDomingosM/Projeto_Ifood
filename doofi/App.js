import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [entregadores, setEntregadores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idrestaurante, setIDrestaurante] = useState(0);

  function getEntregadores(){
    try {
      setTimeout(async () => {
        const response = await axios.get("http://localhost:300/entregadores");
        setEntregadores(response.data.entregadores);
        setLoading(false);
      }, 1000)
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getEntregadores();
  }, []);

  async function addEntregadores(){
    try {
      const response = await axios.post("http://localhost:300/entregadores", {
        nome: nome,
        cpf: cpf,
        telefone: telefone,
        idrestaurante: idrestaurante,
      });
      console.log(response);
      if (response.status === 200) alert("Entregador cadastrado com sucesso");
      getEntregadores();
    } catch (error) {
        Error(error)     
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
    <Text style={{ fontSize: 24, fontWeight: "bold"}}>Cadastro de Entregador</Text>
    {loading && entregadores.length === 0 ? (
      <Text style={{ fontSize: 14}}>Carregando...</Text >
    ) : (
      entregadores.map((entregadores) => {
        return (
          <View
            key={entregadores.nome}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid red",
              gap: 10,
              flexDirection: "column"
            }}
          >
            <Text>Nome: {entregadores.nome}</Text>
            <Text>Cpf: {entregadores.cpf}</Text>
            <Text>Telefone: {entregadores.telefone}</Text>
            <Text>ID do Restaurante: {entregadores.idrestaurante}</Text>
          </View>
        );
      })
    )}
    </ScrollView>
    <TextInput id='nome' value={nome} onChangeText={setNome} placeholder='Nome'/>
    <TextInput id='cpf' value={cpf} onChangeText={setCpf} placeholder='CPF'/>
    <TextInput id='telefone' value={telefone} onChangeText={setTelefone} placeholder='Telefone'/>
    <TextInput id='idrestaurante' value={idrestaurante} onChangeText={setIDrestaurante} placeholder='ID do Restaurante'/>
    
    <TouchableOpacity onPress={addEntregadores}>Adicionar Entregador</TouchableOpacity>
    
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
