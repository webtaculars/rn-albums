import  React , { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
 } from 'react-native';

export default class Header extends Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.props.headerText} {this.props.emoji}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop:15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    elevation: 2,
    position: 'relative'
  }
});
