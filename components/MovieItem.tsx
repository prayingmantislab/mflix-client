import React from 'react';
import {
  View,
  Pressable,
  Image,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Route, useNavigation } from '@react-navigation/native';

interface MovieItemProps {
  poster: string;
  title: string;
  year: string;
  // route: Route<string, { movieId: string }>;
}

const MovieItem: React.FC<MovieItemProps> = ({
  poster,
  title,
  year,
  // route,
  // onItemClick,
}) => {
  // const favoriteMovieIds = useSelector(
  //   (state: any) => state.favoriteMovies.ids
  // );
  // const dispatch = useDispatch();
  //@ts-ignore
  // const { movieId } = '1';
  // const { movieId } = route.params;
  // const selectedMovie = RECOMENDED_MOVIES.find((movie) => movie.id === movieId);

  // const movieIsFavorite = favoriteMovieIds.includes(movieId);
  // const changeFavoriteStatusHandler = () => {
  // if (movieIsFavorite) {
  //   dispatch(removeFavorite({ id: movieId }));
  // } else {
  //   dispatch(addFavorite({ id: movieId }));
  // }
  // };

  return (
    <View style={styles.mealItem}>
      <Pressable>
        <Image source={{ uri: poster }} style={styles.image} />
      </Pressable>
      <Pressable style={styles.button}>
        <Image
          style={styles.favButton}
          source={require('../assets/star-icon.png')}
        />
      </Pressable>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  mealItem: {
    marginTop: 20,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: '100%',
    height: 180,
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
    height: 20,
  },
});
