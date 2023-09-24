import { useState,useEffect } from 'react';
import { View, Text, FlatList, Pressable,  StyleSheet,  Image,

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

    <Pressable onPress={onPress}>
      <Image source={{ uri: item.posterUrl }} style={styles.image} />
    </Pressable>
    <Pressable style = {styles.button}>
    <Image
          style={styles.favButton}
          source={require('../assets/star-icon.png')}
        />
    </Pressable>
    </View>

  );
};

const MovieDetails = ({ item }) => {
  return (
    <>
          <Text style={styles.categoryTitle}>Movie Description</Text>
          <View style={styles.container}>

    <Image
          style={styles.image}
          source={{
            uri: item?.posterUrl,
          }}
        />
    <View style={{ padding: 10 }}>
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Text style={styles.innerText}>Year: {item?.year}</Text>
      <Text style={styles.innerText}>imdbID: {item?.imdbId}</Text>
      <Text style={styles.innerText}>Type: {item?.type}</Text>
    </View>
    </View>
    </>
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
    return <MovieListItem 
   item={item}
    onPress={() => handleMoviePress(item)} />;
  };

  const renderDetails = () => {
    if (!selectedMovie) {
      return null;
    }
    return <MovieDetails item={selectedMovie} />;
  };

  return (
    <View style={styles.container}>
      <FlatList 
      style={styles.flatList}
      data={recommendedMovies} renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal={true}

      />
      {/* {renderDetails()}
      <FlatList 
      horizontal={true}
      data={newMovies} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} /> */}
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
    width: '50%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 10,
  },
  favButton: {
    width: 20,
    height: 20,
    borderRadius: 5,
    flex: 1,
    alignSelf: 'center',
  },
  categoryTitle: {
    color: '#6b6969',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'flex-start',
  },
  innerText: {
    color: '#cac7c7',
    fontSize: 15,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',



    // flexDirection: 'row',
    // paddingHorizontal: 5,
    // margin: 10,
  },
  flatList: {
    flex: 1,
    flexGrow: 0,
    width: '100%',
    height: '100%',

  },
});