import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MOVIES } from '../data/dummy-data';
import MovieItem from '../components/MovieItem';
import MainCard from '../components/MainCard';
import { useEffect } from 'react';
import { useSelector, useDispatch,getState } from 'react-redux';
import {
  fetchData,
  selectData,
  selectIsLoading,
  selectError,
} from '../store/redux/recommendedSlice';


function CategoryScreen() {

  function renderCategoryItem(itemData) {
    console.log('liran',itemData.item )
    return (
      <MovieItem
        poster={itemData.item.posterUrl}
        title={itemData.item.title}
        year={itemData.item.year}
        type={itemData.item.type}
        // onPress={()=>seState(itemData.item.id)}
      />
    );
  }
  const dispatch = useDispatch();
  
  const recomendedMovies = useSelector(selectData);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log("asi",recomendedMovies)

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (


    <View style={StyleSheet.container}>
      {/* {(error)&&<View>{error}</View> } */}
      {/* {(isLoading)&&<View>isLoading...</View> } */}
      <View>
        <FlatList
          data={recomendedMovies}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          horizontal={true}
        />
      </View>
      <View style={styles.Details}>
        <MainCard />
      </View>
      <View>
        <FlatList
          data={MOVIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          horizontal={true}
        />
      </View>
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
  Details: {
    height: 200,
    width: '100%',
  },
  carusele: {
    flex: 1,
  },
});
