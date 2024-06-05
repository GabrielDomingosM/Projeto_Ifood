import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CadRestaurantes(){
    const [restaurante, setRestaurante] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [descricao, setDescricao] = useState("");

    function getRestaurantes(){
        try {
            setTimeout(async () => {
                const response = await axios.get("http://localhost:300/restaurantes");
                setRestaurante(response.data.restaurante);
                setLoading(false);
            }, 1000)
        } catch (error) {
            Error(error)
        }
    }

    useEffect(() => {
        getRestaurantes();
    }, []);

    async function addRestaurantes(){
        try {
            const response = await axios.post("http://localhost:300/restaurantes", {
                nome: nome,
                telefone: telefone,
                endereco: endereco,
                cnpj: cnpj,
                descricao: descricao,
            });
            console.log(response);
            if(response.status === 200) alert("Restaurante cadastrado com sucesso!");
            getRestaurantes();

        } catch (error) {
            Error(error)
        }
    }

    return (
        <View>
            <ScrollView>
            <Text style={{ fontSize: 24, fontWeight: "bold"}}>Cadastro de Restaurantes</Text>
                            
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