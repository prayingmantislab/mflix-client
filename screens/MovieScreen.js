import { useState,useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity,  StyleSheet,  Image,

} from 'react-native';
import { useSelector, useDispatch,getState } from 'react-redux';
import {
  fetchRecData,
  selectRecData,
  selectIsLoading,
  selectError,
} from '../store/redux/recommendedSlice';
import {
  fetchNewData,
  selectNewData,
  selectNewIsLoading,
  selectNewError,
} from '../store/redux/newSlice';

const MovieListItem = ({ item, onPress }) => {
  return (
    <View style={styles.movieItem}>

    <TouchableOpacity onPress={onPress}>
      <View style={{ padding: 10 }}>
      <Image source={{ uri: item.posterUrl }} style={styles.image} />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 14 }}>{item.year}</Text>
        <Text style={{ fontSize: 14 }}>{item.genre}</Text>
      </View>
    </TouchableOpacity>
    </View>

  );
};

const MovieDetails = ({ item }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{item.title}</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>{item.year}</Text>
      <Text style={{ fontSize: 14, marginBottom: 10 }}>{item.genre}</Text>
      <Text style={{ fontSize: 14 }}>{item.description}</Text>
      <Text style={{ fontSize: 14, marginTop: 10 }}>Rating: {item.rating}</Text>
    </View>
  );
};

const MoviesScreen = () => {

  const dispatch = useDispatch();
  
  const recommendedMovies = useSelector(selectRecData);
  const newMovies = useSelector(selectNewData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log("asi",recommendedMovies)

  useEffect(() => {
    dispatch(fetchRecData()),
    dispatch(fetchNewData())
  }, [dispatch]);
  const [selectedMovie, setSelectedMovie] = useState({
    id: 1,
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    rating: 9.3,
    description:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  });

  const handleMoviePress = (item) => {
    setSelectedMovie(item);
  };

  const renderItem = ({ item }) => {
    return <MovieListItem item={item} onPress={() => handleMoviePress(item)} />;
  };

  const renderDetails = () => {
    if (!selectedMovie) {
      return null;
    }
    return <MovieDetails item={selectedMovie} />;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={recommendedMovies} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
      {renderDetails()}
      <FlatList data={newMovies} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
};

export default MoviesScreen;


const styles = StyleSheet.create({
  movieItem: {
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
});