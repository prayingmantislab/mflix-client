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
// pressing one of the movies in the list will take you to the movie details screen
// where you can see more information about the movie

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
    Title: 'Top Gun: Maverick (2022)',
    Year: '2022',
    imdbID: 'tt20599972',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYjNhOTUzZWItYjAzMy00ZmUxLWJmZWEtYTUyYTZmNzQ5YWZjXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg',
  },
  {
    id: '3',
    Title: 'DUNE the end of earth',
    Year: '2022',
    imdbID: 'tt20836186',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMzk4MTQwYmYtODZmZS00NTBmLTg5YjctMzVmZjBiMTI1N2RkXkEyXkFqcGdeQXVyMTUzNDA2ODU2._V1_SX300.jpg',
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
