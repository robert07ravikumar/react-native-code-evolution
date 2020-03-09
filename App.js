import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName] = useState('robert');
  const [age,setAge] = useState('35');
  

  return (
    <View style={styles.container}>
      <Text>Enter name</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.h.John Doe"
        onChangeText={(val) => setName(val)}/>

      <Text>Enter Age</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.input}
              placeholder="32"
              onChangeText={(val) => setAge(val)}/>
            <Text>
        My  name is {name} and age is {age}
      </Text>
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
  buttonContainer:{
    marginTop:20
  },
  input:{
    borderWidth: 1 ,
    borderColor : 'red',
    padding: 8,
    margin: 10,
    width: 200
  }
});
