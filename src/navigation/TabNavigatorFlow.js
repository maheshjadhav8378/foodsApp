import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';

import {fetchFoods} from '../redux/foods_slice';

const Tab = createBottomTabNavigator();

export default TabNavigatorFlow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
