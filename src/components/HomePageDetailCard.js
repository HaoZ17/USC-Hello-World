import "../css/movieCarousel.css";
const IMGURL="https://image.tmdb.org/t/p/original/";
const COLORS = [ 
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
]

function MovieDetail(props) {
    const movieDetail = props.data.detail;
    const backdropUrl = props.data.backdropUrl;
    const posterUrl = props.data.posterUrl;

    // console.log(movieDetail);

    const conditionalRenderGenres = (movieDetail) => {
        if (movieDetail.genres) {
            return movieDetail.genres.map((value, index) => <span key={index} style={{backgroundColor: COLORS[index]}}>{value["name"]}</span>)
        } else {
            return null;
        }
    }
    const conditionalRenderProductionImg = () => {
        if (movieDetail.production_companies) {
            return movieDetail.production_companies.map((item, index) => {
                if (item.logo_path) {
                    return <img className="production-company-img" key={index} src={IMGURL + item.logo_path}/>;
                } else {
                    return null;
                };
            })
        } else {
            return null;
        }
    }
    const conditionalRenderProductionCompanies = (detail) => {
        if (detail.production_companies.length === 0) {
            return null;
        } else {
            return <span className="production-imgs">
                {conditionalRenderProductionImg()}
            </span>
        }
    }

    return (
            <div className={props.show ? "movie-detail show" : "movie-detail hidden"}>
                <img src={backdropUrl} alt={movieDetail.id} className="backdrop-img" />
                <div className="movie-poster-info">
                    <img src={posterUrl} alt={movieDetail.id} className="poster-img"/>
                    <div className="movie-info">
                        <h1>{movieDetail.title}({movieDetail.release_date.substring(0, 4)})</h1>
                        <div>{conditionalRenderGenres(movieDetail)}</div>
                        <p className="movie-overview">{movieDetail.overview}</p>
                        {movieDetail.production_companies ? conditionalRenderProductionCompanies(movieDetail) : null}
                    </div>
                </div>
            </div>
        )



}


export default MovieDetail;