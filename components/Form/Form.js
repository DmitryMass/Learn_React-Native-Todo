import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../styles/globalStyles';

const Form = ({ addHandler }) => {
  const [text, setText] = useState('');

  const onChange = (text) => {
    setText(text);
  };

  return (
    <View style={globalStyle.flexContainer}>
      <View>
        <TextInput
          style={globalStyle.input}
          onChangeText={onChange}
          placeholder={'Your to do'}
          placeholderTextColor={'white'}
        />
      </View>
      <TouchableOpacity
        onPress={() => addHandler(text)}
        style={globalStyle.button}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>Add new Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
