import "../css/movieCarousel.css";

function MovieDetail(props) {
    const movieDetail = props.data.detail;
    const backdropUrl = props.data.backdropUrl;
    const posterUrl = props.data.posterUrl;

    if (props.show) {
        return (
            <div className="movie-detail">
                <img src={backdropUrl} alt={movieDetail.id} className="backdrop-img" />
                <div id="movie-poster-info">
                    <img src={posterUrl} alt={movieDetail.id} className="poster-img"/>
                    <div id="movie-info">
                        <h1>{movieDetail.title}({movieDetail.release_date.substring(0, 4)})</h1>
                        <div>
                            {movieDetail.genre_ids.map(id => <span key={id}>{id}</span>)}
                        </div>
                        <p>{movieDetail.overview}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }


}


export default MovieDetail;