import React from 'react';
import PodcastGridItem from './podcast-grid-item';

class MainPodcasts extends React.Component {

    componentDidMount() {
        this.props.fetchShows();
        debugger;
    }

    render() {
        debugger;
        let shows = this.props.shows.map(show => {
            return <PodcastGridItem key={ show.title } show={ show } />
        })

        return (
            <div>
                <div className="header-grid">
                    <h1 className="main-h1">Top Podcasts</h1>
                </div>
                <div className="featured-container">
                    { shows }
                </div>
            </div>
        );
    }
}

export default (MainPodcasts);