import React , {useState} from 'react';
import { StyleSheet, Text, View,FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header'
import TododItem from './components/TododItem'
import AddTodo from './components/AddTodo'

export default function App() {
    
  const [todos,setTodos] = useState([
    {text: 'buy coffee',key: '1'},
    {text: 'create an app',key: '2'},
    {text: 'play on the switch',key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text:text,key : Math.random().toString()}
          ,
          ...prevTodos
        ]
      })
    }else{
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {console.log('disiees keboard');
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}></AddTodo>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TododItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
    </View>
    </TouchableWithoutFeedback>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop:20
  }
});
