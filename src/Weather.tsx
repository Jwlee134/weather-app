import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {weatherOptions} from './options';

interface IProps {
  temp: number;
  condition: string;
}

const Weather = ({temp, condition}: IProps) => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <LinearGradient
        colors={weatherOptions(condition).color}
        style={styles.container}>
        <View style={styles.container}>
          <View style={styles.topContainer}>
            <Icon
              name={weatherOptions(condition).weather}
              size={100}
              color="white"
            />
            <Text style={styles.temp}>{temp}℃</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.title}>{weatherOptions(condition).title}</Text>
            <Text style={styles.subTitle}>
              {weatherOptions(condition).subtitle}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 30,
  },
  temp: {
    color: 'white',
    fontSize: 40,
  },
  title: {
    color: 'white',
    fontSize: 44,
    marginBottom: 30,
  },
  subTitle: {
    color: 'white',
    fontWeight: '400',
    fontSize: 20,
  },
});

export default Weather;
