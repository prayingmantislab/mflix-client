import { FlatList } from 'react-native';
import {MOVIES} from '../data/dummy-data';
import MovieItem from '../components/MovieItem';

function CategoryScreen () {
  
  function renderCategoryItem (itemData) {
    return (
      <MovieItem
      poster={itemData.item.poster}
      />
      )
    }
    return (
      <FlatList
      data={MOVIES}
      keyExtractor={(item) => item.id} 
      renderItem={renderCategoryItem}
      horizontal={true}
      />
      )
      
}

export default CategoryScreen