import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, Text, Button, Image, View } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('');
  const [characters, setCharacters] = useState([]);
  const [characterImage, setCharacterImage] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchCharacter = () => {
    const character = characters.results.find(
      (char) => char.name.toLowerCase() === text.toLowerCase()
    );

    if (character) {
      setCharacterImage(character.image);
    } else {
      setCharacterImage(null);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Introduce nombre de un personaje de Rick and Morty"
        value={text}/>

      <Button title="Buscar" onPress={searchCharacter} />

      {characterImage && (
        <Image
          style={styles.imgRick}
          source={{
            uri: characterImage,
          }}
        />
      )}

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
  input: {
    width: '30%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
  imgRick: {
    width: 150,
    height: 150,
  },
});
