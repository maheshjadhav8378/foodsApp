import React from 'react';
import {Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

const FoodsList = () => {
  const foods = useSelector(state => state.counter);
  const filteredFoods = foods.filter(food => food.isGlutenFree);

  if (foods.length === 0) {
    return null;
  }

  return (
    <FlatList
      data={filteredFoods}
      renderItem={({item}) => {
        return (
          <>
            <Text>{item.title}</Text>
            <Image source={{uri: item.imageUrl}} height={30} width={30} />
          </>
        );
      }}
    />
  );
};

export default FoodsList;
