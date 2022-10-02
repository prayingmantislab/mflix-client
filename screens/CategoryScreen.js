import { FlatList, StyleSheet, Text, View } from 'react-native';
import {MOVIES} from '../data/dummy-data';
import MovieItem from '../components/MovieItem';
import MainCard from '../components/MainCard';
function renderCategoryItem (itemData) {
  
  return (
    <MovieItem
    poster={itemData.item.poster}
    title={itemData.item.title}
    year={itemData.item.year}
    type={itemData.item.type}
    />
    )
  }

function CategoryScreen () {
    return (
     <View style={StyleSheet.container}>
<View >
      <FlatList
      data={MOVIES}
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryItem}
      horizontal={true}
      />
      </View>
      <View style={styles.Details}>
      <MainCard/>
      </View>
<View >
<FlatList
      data={MOVIES}
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryItem}
      horizontal={true}
      />
      </View>
    </View>
      )
      
}

export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a1a1a',
  },
  Details: {
    
    height: 200,
    width: '100%',
  },
  carusele : {
    flex: 1,
  }
});