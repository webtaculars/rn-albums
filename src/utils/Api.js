var api = {
  getAlbums(){
    var url = "https://rallycoding.herokuapp.com/api/music_albums"
    return fetch(url).then((res) => res.json());
  }
}

module.exports = api;
