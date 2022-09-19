import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import MovieFavPreview from './MovieFavPreview';

const RecommondedList = (
  recommendedMovies: readonly any[] | null | undefined
) => {
  return (
    <View style={styles.recomendedContainer}>
      <View style={styles.container}>
        <Text style={styles.categoryTitle}>Recommended Movies</Text>
      </View>
      <FlatList
        data={recommendedMovies}
        renderItem={({ item }) => <MovieFavPreview />}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recomendedContainer: {
    flex: 1,
  },
  container: {},
  categoryTitle: {
    color: '#dcdcdc',
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});

export default RecommondedList;
