import React from 'react';
import { Image, Text, View } from 'react-native';
import { globalStyle } from '../../styles/globalStyles';

import logo from '../../assets/hippo.jpg';

const Header = () => {
  return (
    <View style={globalStyle.flexContainer}>
      <View>
        <Image source={logo} style={globalStyle.image} />
      </View>
      <View>
        <Text style={globalStyle.title}>TODO APP</Text>
      </View>
    </View>
  );
};

export default Header;
