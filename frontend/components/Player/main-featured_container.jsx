import { connect } from "react-redux";
import { fetchArtists } from "../../actions/artist.actions";
import { fetchAlbums } from "../../actions/album_actions";
import { fetchPlaylists } from "../../actions/playlist.actions";
import { fetchGenres } from "../../actions/genre.actions";
import { fetchShows } from "../../actions/show_actions";
import {
  setCurrentSong,
  setQueue,
  setPlaying
} from "../../actions/player_actions";
import MainFeatured from "../Player/main-featured";

const msp = state => {
  return {
    currentUser: state.entities.users[1],
    artists: Object.values(state.entities.artists),
    albums: Object.values(state.entities.albums)
  };
};

const mdp = dispatch => ({
  fetchArtists: () => dispatch(fetchArtists()),
  fetchAlbums: () => dispatch(fetchAlbums()),
  fetchPlaylists: () => dispatch(fetchPlaylists()),
  fetchGenres: () => dispatch(fetchGenres()),
  fetchShows: () => dispatch(fetchShows()),
  setQueue: queue => dispatch(setQueue(queue)),
  setCurrentSong: song => dispatch(setCurrentSong(song)),
  setPlaying: playing => dispatch(setPlaying(playing))
});

export default connect(
  msp,
  mdp
)(MainFeatured);
