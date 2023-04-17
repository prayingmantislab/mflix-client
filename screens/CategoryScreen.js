import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MOVIES } from '../data/dummy-data';
import MovieItem from '../components/MovieItem';
import SelectedMovie from '../components/SelectedMovie';
import { useState,useEffect } from 'react';
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
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


const MovieListItem = ({item, onPress}) => (
  



function CategoryScreen() {
//if i press on a movie i want to get the id of the movie and send it to the movie selectedMovie component
//i want to get the id of the movie and send it to the movie selectedMovie component

  const [selectedMovie, setSelectedMovie] = useState(null);
  
  function renderCategoryItem(itemData) {
    console.log('selectedMovie',selectedMovie)
    return (
      <MovieItem
        poster={itemData.item.posterUrl}
        title={itemData.item.title}
        year={itemData.item.year}
        type={itemData.item.type}
        onPress={() => setSelectedMovie(itemData.item.id)}
      />
    );
  }


  function renderSelectedMovie() {
    if (selectedMovie) {
      return (
        <SelectedMovie
          movieId={selectedMovie}
          onPress={() => setSelectedMovie(null)}
        />
      );
    }
  }

  function renderNewMovies(itemData) {
    return (
      <MovieItem
        poster={itemData.item.posterUrl}
        title={itemData.item.title}
        year={itemData.item.year}
        type={itemData.item.type}
        onPress={() => setSelectedMovie(itemData)}
      />
    );
  }

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

  console.log(selectedMovie)
  return (


    <View style={StyleSheet.container}>
      <ScrollView> 
    
      <Text style={styles.categoryTitle}>Recomended Movies</Text>

      <View style={styles.carusele}>
        <FlatList
          data={recommendedMovies}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          horizontal={true}

        />
      </View>
      <View style={styles.Details}>
      {selectedMovie && (
        <SelectedMovie
          movieId={selectedMovie}
          onPress={() => setSelectedMovie(null)}
        />
      )}
      </View>
      <View style={styles.carusele}>
      <Text style={styles.categoryTitle}>New Movies</Text>

        <FlatList
          data={newMovies}
          keyExtractor={(item) => item.id}
          renderItem={renderNewMovies}
          horizontal={true}
        />
      </View>
      {/* </SafeAreaView> */}
      </ScrollView>
    </View>

  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1a1a1a',

  },
  carusele: {
    width: '100%',
    flex: 1,
  },
  Details: {
    flex: 1,
    width: '100%',
  },
  categoryTitle: {
    color: '#6b6969',
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'flex-start',
  },
});
