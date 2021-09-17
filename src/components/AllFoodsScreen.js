import React, {useEffect, useEffetc} from 'react';
import {Text, FlatList, Image, View, Dimensions, Alert} from 'react-native';
import {useSelector} from 'react-redux';

import Ionicons from 'react-native-vector-icons/Ionicons';

const SCREEN_SIZE = Dimensions.get('screen').width;

const AllFoodsScreen = () => {
  const data = useSelector(state => state.counter);

  useEffect(() => {
    if (data.error != null) {
      Alert.alert(data.error);
      return;
    }
  }, [data.error]);

  if (data.error != null) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>
          Error occured. Please check if your backend server is running
        </Text>
      </View>
    );
  }

  if (data.arr.length === 0) {
    return <Text>No Items</Text>;
  }

  return (
    <FlatList
      data={data.arr}
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
