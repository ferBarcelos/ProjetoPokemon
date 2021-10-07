import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function favorito() {

    const [favorite,setFavorite]=useState([]);

    useEffect(async () => {
        
        await AsyncStorage.getItem('favorites').then((value)=>{
            setFavorite(favorite+value);
        })
        console.warn(favorite);

    }, [])

    return(
        <View>
            <Image
                    style={styles.logo}
                    source={{
                        uri: `${favorite}`
                    }}
                />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        marginLeft: 200,

    },
    bottonfav: {
        marginLeft: 50
    }
});