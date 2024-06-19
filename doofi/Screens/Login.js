import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function Login({navigation}){

    function logar(){
        navigation.navigate("CadEntregadores");
    }

    return(
        <SafeAreaView style={styles.caixa}>


            <TextInput 
                style={styles.input}
                placeholder="Nome"
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
            />

            <TouchableOpacity onPress={logar}>
                <Text>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    caixa: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
        
    },

    input: {
        backgroundColor: "white",
        borderRadius: 20,
        textAlign: "center",
        fontSize: 20,
        
    },

    btn: {
        borderRadius: 20,
        backgroundColor: "#4287f5",
        width: 150,
        height: 50,
    },
})