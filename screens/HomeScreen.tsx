import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MainCard from '../components/SelectedMovie';
import CategoryTitle from '../components/CategoryTitle';
import MoviePreview from '../components/MoviePreview';
import MovieFavPreview from '../components/MovieFavPreview';
import RecommondedList from '../components/RecommondedList';
import { fetchRecMovies, fetchNewMovies } from '../util/http';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
import CategoryScreen from './CategoryScreen';

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
export default function HomeScreen({
  //@ts-ignore
  route,
  //@ts-ignore
  navigation,
}) {
  // const favoriteMovies = useSelector(
  //   // @ts-ignore
  //   (state) => state.favoriteMovies.ids
  // );

  // const dispatch = useDispatch();

  // const movieId = route.params?.movieId;

  // function changeFavoriteStatusHandler(movieId: string) {
  //   const movieIsFavorite = favoriteMovies.includes(movieId);
  //   if (movieIsFavorite) {
  //     dispatch(removeFavorite({ id: favoriteMovieId }));
  //   } else {
  //     dispatch(addFavorite({ id: favoriteMovieId }));
  //   }
  // }

  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.recomendedContainer}>
        <Text style={styles.categoryTitle}>Recommended Movies</Text> */}
      <CategoryScreen />
      {/* <FlatList
          data={moviesArray}
          renderItem={({ item }) => (
            <MovieFavPreview
              onFavoriteItemClick={changeFavoriteStatusHandler}
            />
          )}
          horizontal={true}
        /> */}
      {/* </View> */}
      {/* 
      <Text style={styles.categoryTitle}>Movie Description</Text>
      <View style={styles.mainContainer}>
        <MainCard />
      </View>
      <View style={styles.newdContainer}>
        <Text style={styles.categoryTitle}>New Movies</Text>
        <FlatList
          data={moviesArray}
          renderItem={({ item }) => <MoviePreview />}
          horizontal={true}
        />
      </View> */}
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
  categoryTitle: {
    paddingTop: 10,
    color: '#dcdcdc',
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});
