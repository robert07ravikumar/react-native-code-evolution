import React , {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName] = useState('robert');
  const [person,setPerson] = useState({'name':'rachel','age':5});

  const pressHandler = () => {
    setName('anand');
    setPerson({'age':4,'name':'janice'});
  }

  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>
        her name is {person.name} and age is {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={pressHandler}/>
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
  buttonContainer:{
    marginTop:20
  }
});
