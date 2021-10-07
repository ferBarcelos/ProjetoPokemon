import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, FlatList, Keyboard, StyleSheet, TextInput, Image, SafeAreaView } from 'react-native'
import api from '../services/api';

export default function home() {

    const navega = useNavigation();

    const [pokemon, setPokemon] = useState(null);
    const [pokemonList, setPokemonList] = useState(null);

     async function ListPokemon() {
        try {
            const result = await api.get(`${pokemon}`)
            console.log('result', result);

            if (result != null) {
                setPokemonList(result.data)
            }

            if (pokemonList != null) {
                navega.navigate('pokemon', {pokemonList})
                setPokemonList(null);
            }
          
        } catch (error) {
            console.log('error', error);
        }
      }

    return (
      
        <View>
            <Image style={styles.imagem} source={require('../image/titulo_pokemon.png')} />

            <TextInput style={styles.pesquisa} value={pokemon} placeholder='Digite o pokemon' onChangeText={setPokemon} />
           
           <View style={styles.botaoContainer}>
            <Button title= "Pesquise" onPress={ListPokemon}/>
            </View>

            <View>

                <FlatList
                    //numColumns={1}
                    data={pokemonList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Pokemons data={item} />}
                />
            </View>
        </View>

    )

}

function Pokemons({ data }) {
  console.warn(data)
  return (
      <View style={styles.pokemons}>
          <Text>Name: {data.name}</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  imagem: {
    width: '100%',
    height: 105,
  },
  pesquisa: {
    padding: 10,
    color: '#000',
    borderColor: '#000',
    borderWidth: 4,
    borderBottomWidth: 1,
    borderRadius: 10,
  }, 
  botaoContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-around',
    marginHorizontal: 15,
    height: 59,
    width: '100%',
  },
  botao:{
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  pokemons: {
    backgroundColor: '#3D0000',
    height: 100,
    margin: 10
}
  
  });