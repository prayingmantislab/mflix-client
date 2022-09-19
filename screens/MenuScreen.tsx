import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Alert,
} from 'react-native';

const MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title='Log Out' onPress={() => Alert.alert('Login')} />
    </SafeAreaView>
  );
};

export default MenuScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
