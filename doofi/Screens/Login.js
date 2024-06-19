import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackView } from "@react-navigation/stack";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Login({navigation}){

    function logar(){
        navigation.navigate("CadEntregadores");
    }

    return(
        <SafeAreaView>


            <TextInput 
                placeholder="ID"
            />
            <TextInput
                placeholder="CPF"
            />

            <TouchableOpacity onPress={logar}>
                <Text>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}