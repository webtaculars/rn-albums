import React, { Component } from "react";
import { Text, View } from "react-native";

import Header from "./src/component/Header";
import AlbumList from "./src/component/AlbumList";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Albums" emoji=":)" />
        <AlbumList />
      </View>
    );
  }
}
