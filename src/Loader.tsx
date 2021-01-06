import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const Loader = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <View style={styles.container}>
        <Text style={styles.text}>Getting the fucking weather</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FDF6AA',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 30,
  },
});

export default Loader;
