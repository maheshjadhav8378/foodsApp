import React from 'react';
import {Text, FlatList, Image, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_SIZE = Dimensions.get('screen').width;

const VeganFoodScreen = () => {
  const foods = useSelector(state => state.counter.arr);

  if (foods.length === 0) {
    return null;
  }
  const filteredFoods = foods.filter(food => {
    return food.isVegan;
  });

  // console.log(foods);

  return (
    <FlatList
      data={filteredFoods}
      renderItem={({item}) => {
        // console.log('foods', foods);
        return (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
              <Ionicons
                name={
                  item.isVegan
                    ? 'checkmark-circle-outline'
                    : 'add-circle-outline'
                }
                size={30}
              />
            </View>
            <Image
              source={{uri: item.imageUrl}}
              style={{width: SCREEN_SIZE, height: 300}}
            />
          </View>
        );
      }}
    />
  );
};

export default VeganFoodScreen;
