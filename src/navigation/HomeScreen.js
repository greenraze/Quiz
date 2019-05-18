import React from 'react';
import { View } from 'react-native';
 import { Home} from '@container'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
      header: null
  }
   
  render() {
    return (
      <View style={{flex:1}}>
       <Home/>
      </View>
    );
  }
}
