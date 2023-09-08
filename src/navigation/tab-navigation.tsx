import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from 'config/colors';
import * as React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import CategoriesTab from 'screens/delivery';
import HomeTab from 'screens/home';
import TabParamList from '../types/navigation-types/bottom-tab';
import UserTab from 'screens/user-tab';
const Tab = createBottomTabNavigator();
const BottomTab = createNativeStackNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        unmountOnBlur: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home';
          if (route.name === 'Dashboard') {
            iconName = 'home';
          } else if (route.name === 'CategoriesTab') {
            iconName = 'search';
          } else if (route.name === 'UserTab') {
            iconName = 'user';
          }
          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <BottomTab.Screen name="HomeTab" component={HomeTab} />
      <BottomTab.Screen name="CategoriesTab" component={CategoriesTab} />
      <BottomTab.Screen name="UserTab" component={UserTab} />
    </Tab.Navigator >
  );
};
export default TabNavigator;
