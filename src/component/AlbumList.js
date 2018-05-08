import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { getAlbums } from "../utils/Api";
import AlbumDetail from "./AlbumDetail";

export default class AlbumList extends Component {
  state = { albums: [] };

  componentDidMount() {
    getAlbums()
      .then(res => {
        this.setState({
          albums: res
        });
      })
      .catch(error => console.log(error));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

const styles = StyleSheet.create({});
