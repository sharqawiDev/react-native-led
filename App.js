import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { ExampleControlledVertical } from './ExampleControlledVertical'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container} >
        <ExampleControlledVertical />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    backgroundColor: '#212021',
  },
  touchable: {
    padding: 5,
  },
  text: {
    color: 'white',
  },
})