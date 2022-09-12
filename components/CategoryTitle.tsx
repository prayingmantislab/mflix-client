import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CategoryTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Movie Description</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryTitle: {
    color: '#dcdcdc',
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});
