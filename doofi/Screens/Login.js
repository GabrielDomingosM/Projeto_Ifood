import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StackView } from "@react-navigation/stack";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Login(){
    return(
        <SafeAreaView>


            <TextInput 
                placeholder="ID"
            />
            <TextInput
                placeholder="CPF"
            />

            <TouchableOpacity>
                <Text>Login</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}