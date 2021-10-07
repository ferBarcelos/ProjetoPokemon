import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import pokemon from './src/pages/pokemon';
import favorito from './src/pages/favorito';
import home from './src/pages/home';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteNam="home" >
        {/* exemplo simples: options={{ title: 'Nome Tela' }}*/}
        <Stack.Screen
          name="home"
          component={home}
          options={ ({navigation}) => ({
              title: 'ACESSE A LISTA ',
              headerStyle: {
                backgroundColor: '#000'
              },
              headerTintColor: '#FFF',
              headerShown: true,
              headerRight: () => (
                <Button title="Lista de Favoritos" onPress={() => navigation.navigate('favorito')}  ></Button>
              )
            
          })}
        />
        <Stack.Screen name="pokemon" component={pokemon} />
        <Stack.Screen name="favorito" component={favorito} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}