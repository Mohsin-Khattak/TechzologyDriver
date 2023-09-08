// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LoginScreen from 'screens/login-screen';
import Splash from 'screens/splash';
import {horizontalAnimation} from '../utils';
import {useTheme} from '@react-navigation/native';
import DrawerNavigator from './drawer-navigation';
import OrderDetails from 'screens/order-details';
import Collection from 'screens/collections';
import PendingDelivery from 'screens/pending-delivery';
import Tracking from 'screens/tracking';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const {colors, dark} = useTheme();

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.background}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Stack.Navigator
        initialRouteName="Drawer"
        screenOptions={horizontalAnimation}>
        <Stack.Group>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="OrderDetails" component={OrderDetails} />
          <Stack.Screen name="Collection" component={Collection} />
          <Stack.Screen name="PendingDelivery" component={PendingDelivery} />
          <Stack.Screen name="Tracking" component={Tracking} />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
