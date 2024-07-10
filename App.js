import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicio from './components/TelaInicio';
import TelaCatalogo from './components/TelaCatalogo';
import TelaContato from './components/TelaContato';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#400303",
            height: 80,
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff"
          }
        }}
      >
        <Tabs.Screen 
        name="Início" 
        component={TelaInicio}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={24} color={color} />
          ),
          tabBarActiveBackgroundColor: "#400303",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#AB887C",
        }}
        />
        <Tabs.Screen 
        name="Catálogo" 
        component={TelaCatalogo}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="wine-bottle" size={24} color={color} />
          ),
          tabBarActiveBackgroundColor: "#400303",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#AB887C",
        }}
        />
        <Tabs.Screen 
        name="Contato" 
        component={TelaContato}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
          tabBarActiveBackgroundColor: "#400303",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#AB887C",
        }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}