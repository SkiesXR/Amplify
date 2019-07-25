import { connect } from 'react-redux';
import GenreShow from './genre-show';
import { fetchGenre } from '../../actions/genre.actions';

const msp = (state, ownProps) => {
    // let artists = [];
    // const genre = state.entities.genres[ownProps.match.params.genreId];
    // debugger;
    // if (genre.artists) {
    //     return artists = Object.keys(genre.artists).map(artistId => {
    //         return Object.assign({}, genre.artists[artistId], {id: artistId});
    //     })
    // }
    console.log(state.entities);
    console.log(ownProps);
    console.log(state.entities.genres[ownProps.match.params.genreId]);
    debugger;
    return ({ 
        genres: state.entities.genres[ownProps.match.params.genreId]
     });
};

const mdp = dispatch => {
    return ({fetchGenre: id => dispatch(fetchGenre(id))})
};

export default connect(
    msp,
    // null,
    mdp
)(GenreShow);