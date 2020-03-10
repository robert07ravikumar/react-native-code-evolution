import React , {useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name: 'robert', key: '1'},
    {name: 'roberta', key: '2'},
    {name: 'robert2', key: '3'},
    {name: 'robert3', key: '4'},
    {name: 'robert4', key: '5'},
    {name: 'robert4', key: '6'},
    {name: 'robert4', key: '7'},
    {name: 'robert4', key: '8'},
    {name: 'robert4', key: '9'},
    {name: 'robert4', key: '10'}
    
  ])
  

  return (
    <View style={styles.container}>
      <ScrollView>
      {
        people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>
                {item.name}
                </Text>
              </View>
          )
        )
      }
    </ScrollView>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
