import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadEntregadores() {

    const [entregadores, setEntregadores ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [idrestaurante, setIDrestaurante] = useState(0);

    async function getEntregadores(){
        try {
            const response = await axios.get("http://localhost:300/entregadores");
            setEntregadores(response.data.entregadores);
        } catch (error) {
            new Error(error);
        }
    }

    useEffect(() => {
        getEntregadores();
    }, []);

    async function addEntregadores() {
        try {
            const response = await axios.post("htpp://localhost:300/entregadores", {
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                idrestaurante: idrestaurante
            });
            if (response.status === 200) alert("Entregador cadastrado com sucesso");
            getEntregadores(); 
        } catch (error) {
            new Error(error)
        }
    }

  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={{fontSize: 24}}>Cadastro de Entregadores</Text>
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
                     <Text>ID cargo: {entregadores.idrestaurante}</Text>
                   </View>
                 );
               })
             )}
        </ScrollView>
        <TextInput id='nome' value={nome} onChangeText={setNome} placeholder='Nome'/>
        <TextInput id='senha' value={cpf} onChangeText={setCpf} placeholder='CPF'/>
        <TextInput id='cargos_id' value={telefone} onChangeText={setTelefone} placeholder='Telefone'/>
        <TextInput id='idrestaurante' value={idrestaurante} onChangeText={setIDrestaurante} placeholder='ID do restaurante'/>
             
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
