import { connect } from 'react-redux';
import GenreShow from './genre-show';
import { fetchGenre } from '../../actions/genre.actions';

const msp = (state, ownProps) => {
    let genres = state.entities.genres[ownProps.match.params.genreId];
    return ({ 
        genres: genres,
        artists: (genres || {}).artists,
        category: (genres || {}).category
     });
};

const mdp = dispatch => {
    return ({fetchGenre: id => dispatch(fetchGenre(id))})
};

export default connect(
    msp,
    mdp
)(GenreShow);