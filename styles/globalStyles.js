import { StyleSheet } from 'react-native';

export const COLORS = {
  blueBtn: 'blue',
  redBtn: 'red',
  black: 'black',
  white: 'white',
};

export const globalStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'gray',
  },
  flexContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 21,
    lineHeight: 24,
    color: COLORS.white,
  },
  button: {
    backgroundColor: COLORS.blueBtn,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  input: {
    width: 200,
    height: 30,
    borderColor: COLORS.white,
    borderWidth: 1,
    color: COLORS.white,
    paddingHorizontal: 10,
    fontSize: 18,
  },
});
