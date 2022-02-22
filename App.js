import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
