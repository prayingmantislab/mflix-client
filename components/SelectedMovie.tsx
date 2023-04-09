// create a main card component for the selected movie
// the comoonent should have an image, a title, a year, an imdbID and a type
//the image should be a poster of superman

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { RECOMENDED_MOVIES } from '../data/dummy-data';
export default function SelectedMovie(movieId: any) {
  const movie = RECOMENDED_MOVIES.find((movie) => movie.id === movieId);
  return (
    <>
      <Text style={styles.categoryTitle}>Movie Description</Text>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: movie?.posterUrl,
          }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{movie?.title}</Text>
          <Text style={styles.innerText}>Year: {movie?.year}</Text>
          <Text style={styles.innerText}>imdbID: {movie?.imdbId}</Text>
          <Text style={styles.innerText}>Type: {movie?.type}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    margin: 10,
  },
  categoryTitle: {
    color: '#6b6969',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  image: {
    width: '50%',
    aspectRatio: 1,
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

    padding: 10,
    borderRadius: 5,
    width: '50%',
    aspectRatio: 1,
  },
  cardTitle: {
    color: '#dcdcdc',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  innerText: {
    color: '#cac7c7',
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
});
