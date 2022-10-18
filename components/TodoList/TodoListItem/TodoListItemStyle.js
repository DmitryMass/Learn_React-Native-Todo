import { StyleSheet } from 'react-native';
import { COLORS } from '../../../styles/globalStyles';

export const todoListItemStyle = StyleSheet.create({
  deleteBtn: {
    backgroundColor: 'red',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  todo: {
    color: COLORS.white,
    fontSize: 18,
  },
});
