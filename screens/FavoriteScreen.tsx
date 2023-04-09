import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainCard from '../components/SelectedMovie';
import CategoryTitle from '../components/CategoryTitle';
import MoviePreview from '../components/MoviePreview';
import MovieFavPreview from '../components/MovieFavPreview';

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
export default function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <CategoryTitle />
        <FlatList
          style={styles.flatList}
          data={moviesArray}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MainCard />}
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

  itemContainer: {
    flex: 1,
  },
  flatList: {
    flex: 1,
    marginBottom: 10,
  },
});
