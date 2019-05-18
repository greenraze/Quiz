import { StyleSheet } from 'react-native';
import {Colors} from '@common'

export const styles = StyleSheet.create({
  radioButton: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, height: 30, borderRadius: 15,
    marginStart: 40
  },
  checked: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.BLACK
  },
  cellContainer: {
    backgroundColor: Colors.WHITE,
    height: 150, width: '100%',
    borderBottomWidth: 0.5,
    borderColor: Colors.BACKGROUND,
    justifyContent: 'space-between',
    padding: 20
  },
  question: {
    fontSize: 16,
  },
  button:{
    flexDirection:'row'
  },
  answers:{
    fontSize:18,
    marginStart:5
  }
});