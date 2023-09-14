import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import CustomDrawer from './customDrawer';
import {TabBar} from './curvedtabs';

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
  const {initialRoute} = props?.route?.params || {};

  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {width: '70%'},
        }}
        initialRouteName="TabNavigator"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="TabNavigator"
          initialParams={{
            initialRoute,
          }}
          component={TabBar}
        />
      </Drawer.Navigator>
    </>
  );
}
export default DrawerNavigator;
