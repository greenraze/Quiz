
import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Navigation from '@navigation'

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.safe}>
        <Navigation />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'red'
  },
})

