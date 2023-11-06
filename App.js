import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, TextInput, Text, Button, Image, View } from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('');
  const [list] = React.useState([]);
  
  useEffect(() =>{
    getData();
  })

  const getData = () =>  {
    fetch('https://rickandmortyapi.com/api/character', {method: 'GET', headers: {'Content-Type':'application/json'} })
            .then(response => response.json())
            .then(json => {
              return json;
            })
            .then(res => list(res))
            .catch(error => {
              console.error(error);
            }) 
  }


  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Introduce nombre personaje de Rick y Morty"
        value={text} 
        />

        <Button
        title="Buscar"
        onPress={() => list.map((item, index)=>{
          return (
            item.results
          )
        })}
        />
        
        <Image
        style={styles.imgRick}
        source={{
          uri: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        }}
        />

        <Text>By Johan Cruz Huertas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgRick: {
    width: 50,
    height: 50,
  },
});
