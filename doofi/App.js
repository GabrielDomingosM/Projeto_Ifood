import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CadEntregador from "./Screens/CadEntregadores";
import Login from "./Screens/Login";

export default function App(){
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="CadEntregadores" component={CadEntregador}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}