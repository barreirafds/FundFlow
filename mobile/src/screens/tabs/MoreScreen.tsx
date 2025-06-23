// src/screens/tabs/MoreScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

export const MoreScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HeaderBackButton
          tintColor="#48BF73"
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.title}>More Options Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  header: {
    paddingTop: 50,
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#48BF73',
    textAlign: 'center',
    marginTop: 20,
  },
});