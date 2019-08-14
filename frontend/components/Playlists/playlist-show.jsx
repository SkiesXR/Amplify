import React from 'react';
import { connect } from 'react-redux';
import { fetchOnePlaylist, followPlaylist, unfollowPlaylist, deletePlaylist } from './../actions/music_actions';
// import SongIndexItem from './song_index_item';
import SongIndex from './song_index';
import { setCurrentSong, setQueue, toggleSong } from './../actions/music_player_actions';

class PlaylistShow extends React.Component {

    constructor(props) {
        super(props);
        this.state = { followed: null }
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.setInitialState = this.setInitialState.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.getQueue = this.getQueue.bind(this);
    }

    componentDidMount() {
        this.props.fetchOnePlaylist(this.props.match.params.playlistId)
            .then(() => this.setInitialState())
    }

    setInitialState() {
        this.setState({ followed: this.props.playlist.followed });
    }

    handleFollow() {
        this.setState({ followed: true })
        this.props.followPlaylist(this.props.playlist.id)
    }

    handleUnfollow() {
        this.setState({ followed: false })
        this.props.unfollowPlaylist(this.props.playlist.id)
    }

    handleDelete() {
        this.props.deletePlaylist(this.props.playlist.id)
            .then(() => this.props.history.push(`/library/playlists/`))
    }

    handlePlay() {
        this.props.setCurrentSong(this.props.songs[0]);
        this.props.setQueue(this.props.queue);
        this.props.toggleSong();
    }

    getQueue(currSongIdx) {
        let { songs } = this.props;
        let queue = songs.slice(1);
        return queue;
    }

    render() {
        let { playlist } = this.props;
        if (!playlist) {
            return null;
        }

        let followButton;
        if (!this.state.followed) {
            followButton = (<button onClick={this.handleFollow}>FOLLOW</button>)
        } else {
            followButton = (<button onClick={this.handleUnfollow}>UNFOLLOW</button>)
        }

        let deleteButton;
        if (playlist.owned) {
            deleteButton = (<button onClick={this.handleDelete}>DELETE</button>)
        } else {
            deleteButton = null;
        }

        return (
            <div className="playlist-show-container">
                <div className="playlist-info">
                    <div className="img-container">
                        <img src={window.images.playlist}></img>
                        <i className="far fa-play-circle"></i>
                    </div>
                    <h1>{playlist.name}</h1>
                    <button onClick={this.handlePlay}>PLAY</button>
                    {followButton}
                    {deleteButton}
                    <h3>{this.props.songs ? Object.values(this.props.songs).length : 0} SONGS</h3>
                </div>

                <div className="playlist-songs">
                    <ul className="song-index">
                        <SongIndex inPlaylist={true}></SongIndex>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    playlist: state.entities.playlists[ownProps.match.params.playlistId],
    songs: Object.values(state.entities.songs)
});

const mapDispatchToProps = (dispatch) => ({
    fetchOnePlaylist: (playlistId) => dispatch(fetchOnePlaylist(playlistId)),
    followPlaylist: (playlistId) => dispatch(followPlaylist(playlistId)),
    unfollowPlaylist: (playlistId) => dispatch(unfollowPlaylist(playlistId)),
    deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId)),
    setCurrentSong: (song) => (dispatch(setCurrentSong(song))),
    toggleSong: () => (dispatch(toggleSong())),
    setQueue: (queue) => (dispatch(setQueue(queue)))
});

export default connect(mapStateToProps, mapDispatchToProps)
    (PlaylistShow);