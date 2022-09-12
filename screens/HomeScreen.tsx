import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MainCard from '../components/MainCard';
import CategoryTitle from '../components/CategoryTitle';

// create a netflix clone app
// create 2 carousels with movie cards in them (one for recomended movies, one for new movies)
// create a search bar
// create a tub navigation bar at the bottom of the screen for home, and favorites
// create a main card component for the selected movie

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CategoryTitle />
      <MainCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
  },
});
