import React from 'react';
import { View } from 'react-native';

const TodoList = ({ list, render }) => {
  return <View>{list.map(render)}</View>;
};

export default TodoList;
