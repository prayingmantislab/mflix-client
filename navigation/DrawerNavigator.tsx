import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuScreen from '../screens/MenuScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='MenuScreen' component={MenuScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
