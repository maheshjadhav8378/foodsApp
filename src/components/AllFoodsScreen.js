import React from 'react';
import {Text, FlatList, Image, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_SIZE = Dimensions.get('screen').width;

const AllFoodsScreen = () => {
  const foods = useSelector(state => state.counter);

  if (foods.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={foods}
      keyExtractor={(item, index) =>
        item.title + index.toString() + Math.random().toString()
      }
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
                  item.isGlutenFree && item.isVegan
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

export default AllFoodsScreen;
