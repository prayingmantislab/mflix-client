// create a login screen component for netflix clone app

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ImageBackground,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
// import { login } from '../store/actions/authActions';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/bgImg.png')}
      >
        <KeyboardAvoidingView>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Menora Flix</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.loginText}>Login</Text>
            <TextInput style={styles.input} placeholder='username' />
            <TextInput style={styles.input} placeholder='password' />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.signupTextCont}>
            <Text style={styles.signupText}>Don't have an account yet?</Text>
            <TouchableOpacity>
              <Text style={styles.signupButton}> Signup</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#f50606',
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  input: {
    width: 300,
    backgroundColor: '#afadad',
    padding: 15,
    marginBottom: 10,
  },
  button: {
    width: 300,
    backgroundColor: '#e50914',
    padding: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  loginText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
