import React , {useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

export default function App() {
  const [people,setPeople] = useState([
    {name: 'robert', id: '1'},
    {name: 'roberta', id: '2'},
    {name: 'robert2', id: '3'},
    {name: 'robert3', id: '4'},
    {name: 'robert4', id: '5'},
    {name: 'robert5', id: '6'},
    {name: 'robert6', id: '7'},
    {name: 'robert8', id: '8'},
    {name: 'robert9', id: '9'},
    {name: 'robert10', id: '10'}
    
  ])
  

  return (
    <View style={styles.container}>
      
      <FlatList 
        data={people}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem ={({item}) => (
          <Text style={styles.item}>
                {item.name}
                </Text>
        )}
      />
      
      {/* <ScrollView>
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
    </ScrollView> */}


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
    fontSize: 24,
    marginHorizontal:10,
    marginTop:24
  }
});
