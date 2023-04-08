import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { NavigationContainer } from '@react-navigation/native';
import CategoryScreen from '../screens/CategoryScreen';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator

      //@ts-ignore
      >
        <BottomTab.Screen
          // change the background color of the tab to red
          // add home icon to tab

          options={{
            //change the background color of the screen header to black
            //change the text color of the screen header to white
            //change the the background color of the screen to black

            headerStyle: {
              backgroundColor: 'red',
            },
            tabBarIcon: () => (
              <Image
                source={require('../assets/home-icon.png')}
                style={{ width: 20, height: 20 }}
              />
            ),
            tabBarStyle: { backgroundColor: 'black' },
          }}
          name='My Home'
          component={CategoryScreen}
        />
        <BottomTab.Screen
          // change the background color of the screen to black
          options={{
            headerShown: false,

            tabBarIcon: () => (
              <Image
                source={require('../assets/favorite.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: 'white',
                  backgroundColor: 'black',
                }}
              />
            ),
            tabBarStyle: { backgroundColor: 'black' },
          }}
          name='Favorite'
          component={FavoriteScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
