import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTodosScreen from "./src/screens/ViewTodosScreen";
import ViewTodosScreen from "./src/screens/ViewTodosScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "ViewTodos">
          <Stack.Screen 
          name="AddTodo" 
          component={AddTodosScreen} 
          options={{title: 'Tambah To-Do'}} 
          />
          <Stack.Screen 
          name="ViewTodo" 
          component={ViewTodosScreen} 
          options={{title: 'Daftar To-Do'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
