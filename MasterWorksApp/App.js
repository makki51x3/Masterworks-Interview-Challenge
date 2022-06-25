import { Provider } from 'react-redux';
import React from 'react';
import { store } from './redux/store';
import HomeScreen from './HomeScreen'

export const App = () => {
  return (
    <Provider store={store}>
        <HomeScreen/>
    </Provider>
  );
}
export default App;