import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../../styles/globalStyles';
import { todoListItemStyle } from './TodoListItemStyle';

const TodoListItem = ({ el, deleteHandler }) => {
  return (
    <View style={globalStyle.flexContainer} key={Math.random() * 10}>
      <View>
        <Text style={todoListItemStyle.todo}>{el.text}</Text>
      </View>
      <TouchableOpacity
        style={todoListItemStyle.deleteBtn}
        onPress={() => deleteHandler(el.key)}
      >
        <Text style={todoListItemStyle.todo}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoListItem;
