import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadRestaurantes() {

  const [restaurante, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cnpj, setCnpj] = useState(0);
  const [descricao, setDescricao] = useState("");

  function getRestaurante(){
    try {
      setTimeout(async () => {
        const response = await axios.get("http://localhost:300/entregador");
        setRestaurantes(response.data.restaurante);
        setLoading(false);
      }, 1000)
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getRestaurante();
  }, []);

  async function addRestaurante(){
    try {
      const response = await axios.post("http://localhost:300/entregador", {
        nome: nome,
        telefone: telefone,
        endereco: endereco,
        cnpj: cnpj,
        descricao: descricao,
      });
      console.log(response);
      if (response.status === 200) alert("Restaurante cadastrado com sucesso");
      getRestaurante();
    } catch (error) {
        Error(error)     
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
    <Text style={{ fontSize: 24, fontWeight: "bold"}}>Cadastro de Restaurante</Text>
    {loading && restaurante.length === 0 ? (
      <Text style={{ fontSize: 14}}>Carregando...</Text >
    ) : (
        restaurante.map((restaurante) => {
        return (
          <View
            key={restaurante.nome}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid red",
              gap: 10,
              flexDirection: "column"
            }}
          >
            <Text>Nome: {restaurante.nome}</Text>
            <Text>Telefone: {restaurante.telefone}</Text>
            <Text>Endereco: {restaurante.endereco}</Text>
            <Text>Cnpj: {restaurante.cnpj}</Text>
            <Text>descricao: {restaurante.descricao}</Text>
          </View>
        );
      })
    )}
    
    <TextInput id='nome' value={nome} onChangeText={setNome} placeholder='Nome'/>
    <TextInput id='telefone' value={telefone} onChangeText={setTelefone} placeholder='Telefone'/>
    <TextInput id='endereco' value={endereco} onChangeText={setEndereco} placeholder='Endereco'/>
    <TextInput id='cnpj' value={cnpj} onChangeText={setCnpj} placeholder='Cnpj'/>
    <TextInput id='descricao' value={descricao} onChangeText={setDescricao} placeholder='Descricao'/>
    
    <TouchableOpacity onPress={addRestaurante}>Adicionar Restaurante</TouchableOpacity>
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