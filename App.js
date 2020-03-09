import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>
          hello, world!
        </Text>
      </View>
      <View style={styles.body}>
        <Text>
          robert is a good boy
          </Text>
          <Text>
          robert is a good boy
          </Text>
          <Text>
          robert is a good boy
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    backgroundColor: 'pink',
    padding: 20
  },
  boldText:{
    fontWeight: 'bold'
  },
  body:{
    backgroundColor: 'yellow',
    padding: 20
  }
});
