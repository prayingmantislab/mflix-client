// create a main card component for the selected movie
// the comoonent should have an image, a title, a year, an imdbID and a type
//the image should be a poster of superman

import React, { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';

// import { add } from '../src/features/favorite/favoritesSlice';

export default function MovieFavPreview() {
  const [MainCard, setMainCard] = useState({});
  const addToMainCard = () => {};
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        }}
      />
      <Pressable
        onPress={() => {
          addToMainCard;
        }}
        style={styles.button}
      >
        <Image
          style={styles.favButton}
          source={require('../assets/star-icon.png')}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 120,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    flex: 1,
  },
  favButton: {
    width: 20,
    height: 20,
    borderRadius: 5,
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#2f2e2e',
    justifyContent: 'flex-end',
    width: 120,
  },
});
