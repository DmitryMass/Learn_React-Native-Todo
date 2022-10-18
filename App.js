import { FlatList, Keyboard, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header/Header';
import { globalStyle } from './styles/globalStyles';
import TodoListItem from './components/TodoList/TodoListItem/TodoListItem';
import Form from './components/Form/Form';
import { useState } from 'react';

export default function App() {
  const [todo, setTodo] = useState([]);

  const addHandler = (text) => {
    Keyboard.dismiss();
    if (text.trim() && text.length > 0) {
      setTodo((list) => {
        return [
          ...list,
          {
            text: text,
            key: Math.random().toString(36).substring(4),
          },
        ];
      });
      return;
    }
    return alert('EMPTY INPUT');
  };

  const deleteHandler = (key) => {
    setTodo((list) => {
      return list.filter((item) => item.key !== key);
    });
  };

  return (
    <>
      <SafeAreaView style={globalStyle.wrapper}>
        <StatusBar />
        <Header />
        <FlatList
          data={todo}
          renderItem={({ item }) => (
            <TodoListItem deleteHandler={deleteHandler} el={item} />
          )}
        />
        <Form addHandler={addHandler} />
      </SafeAreaView>
    </>
  );
}
