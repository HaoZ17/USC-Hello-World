import MovieCarousel from "../components/MovieCarousel";
import "../css/homePageContainer.css";
import {useSelector} from "react-redux";


function HomePageContainer(props) {
    const movieDetails = useSelector(state => state.movieSet);
    return (
        <div className="home-page-container">
            <MovieCarousel data={movieDetails}/>
        </div>
    )
}

export default HomePageContainer;