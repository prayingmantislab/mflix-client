import {View,Pressable, Image,Text,StyleSheet,Platform} from 'react-native'

function MovieItem ({poster,title}) {
  console.log(poster)
  return (
    <View>
      <Pressable>
        <View style={styles.container}>
        <Image
         source={{uri:poster}}
         style={styles.image}
         /> 
        </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    width: 120,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    flex: 1,
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
