import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddNotes } from './src/components/AddNotes';
import { Header } from './src/components/Header';
import { Todo } from './src/components/Notes';

export default function App() {

  const [todos, setTodos] = useState([])


  const addTodo = (title) => {

    setTodos((prev) => {
      return [...prev, {
        id: Date.now().toString(),
        title
      }]
    })
  }



  return (
    <View style={styles.container}>
      <Header />
      <AddNotes clickIvent={addTodo}/>
      <View>
        {todos.map(todo => {
          return <Todo title={todo.title}/>
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
