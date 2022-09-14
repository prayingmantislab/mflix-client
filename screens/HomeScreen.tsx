import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainCard from '../components/MainCard';
import CategoryTitle from '../components/CategoryTitle';
import MoviePreview from '../components/MoviePreview';
import MovieFavPreview from '../components/MovieFavPreview';
// create a netflix clone app
// create 2 carousels with movie cards in them (one for recomended movies, one for new movies)
// create a search bar
// create a tub navigation bar at the bottom of the screen for home, and favorites
// create a main card component for the selected movie

const moviesArray = [
  {
    id: '1',
    title: 'Superman',
    year: '2018',
    imdbID: '123456',
    type: 'Movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    id: '2',
    title: 'Superman',
    year: '2018',
    imdbID: '123456',
    type: 'Movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
  {
    id: '3',
    title: 'Superman',
    year: '2018',
    imdbID: '123456',
    type: 'Movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
  },
];
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.recomendedContainer}>
        <CategoryTitle />
        <FlatList
          data={moviesArray}
          renderItem={({ item }) => <MovieFavPreview />}
          horizontal={true}
        />
      </View>
      <CategoryTitle />
      <View style={styles.mainContainer}>
        <MainCard />
      </View>
      <View style={styles.newdContainer}>
        <CategoryTitle />
        <FlatList
          data={moviesArray}
          renderItem={({ item }) => <MoviePreview />}
          horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  recomendedContainer: {
    flex: 1,
  },

  newdContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
});
