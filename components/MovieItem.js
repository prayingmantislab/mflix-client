import {View,Pressable, Image,Text,StyleSheet,Platform} from 'react-native'

function MovieItem ({poster,title}) {
  
  return (

        <View style={styles.mealItem}>
      <Pressable>
        <Image
         source={{uri:poster}}
         style={styles.image}
         /> 

      </Pressable>
      <Pressable style={styles.button}>
       <Image
           style={styles.favButton}
        source={require('../assets/star-icon.png')}
         />
       </Pressable>
       </View>
      
  )
}

export default MovieItem


const styles = StyleSheet.create({
  mealItem: {
    marginTop: 50,
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
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
