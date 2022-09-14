// create a main card component for the selected movie
// the comoonent should have an image, a title, a year, an imdbID and a type
//the image should be a poster of superman
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MainCard() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        }}
      />

      <View style={styles.textContainer}>
        <Text style={styles.cardTitle}>Superman Returns</Text>
        <Text style={styles.innerText}>Year: 2019</Text>
        <Text style={styles.innerText}>imdbID: 123456</Text>
        <Text style={styles.innerText}>Type: Movie</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    margin: 10,
  },
  image: {
    width: '50%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#424141',
    color: '#a7a6a6',
    width: '50%',
    height: 250,
    padding: 10,
    borderRadius: 5,
  },
  cardTitle: {
    color: '#dcdcdc',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 50,
  },
  innerText: {
    color: '#cac7c7',
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
});
