import React from 'react';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigatorFlow from './src/navigation/TabNavigatorFlow';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigatorFlow />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
