import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {fetchFoods} from '../redux/foods_slice';
import VeganFoodScreen from '../components/VeganFoodScreen';
import AllFoodsScreen from '../components/AllFoodsScreen';
import GlutenFreeFoodScreen from '../components/GlutenFreeFood';

const Tab = createBottomTabNavigator();

const TabNavigatorFlow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'Home';
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'GlutenFree') {
              iconName = 'rocket';
            } else {
              iconName = 'heart-circle-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'tomato',
          tabBarLabelStyle: {
            fontSize: 15,
          },
        };
      }}>
      <Tab.Screen name="Home" component={AllFoodsScreen} />

      <Tab.Screen name="GlutenFree" component={GlutenFreeFoodScreen} />
      <Tab.Screen name="Vegan" component={VeganFoodScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigatorFlow;
