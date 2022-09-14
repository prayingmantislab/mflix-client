// create a main card component for the selected movie
// the comoonent should have an image, a title, a year, an imdbID and a type
//the image should be a poster of superman
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function MoviePreview() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
    flex: 1,
  },
});
