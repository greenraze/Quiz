import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootRouter from './src/RootRouter';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillMount() {
    Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
  }

  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

