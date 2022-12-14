import 'react-native-gesture-handler';
import React, { type PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { store } from './store/redux/store.js';
import { Provider } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DrawerNavigator from './navigation/DrawerNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from './screens/MenuScreen';
import CategoryScreen from './screens/CategoryScreen.js';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Menu' component={MenuScreen} />
   /       </Drawer.Navigator>
        </NavigationContainer> */}
        <BottomTabNavigator />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
  },
});

export default App;
