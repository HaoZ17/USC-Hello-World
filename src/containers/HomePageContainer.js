import MovieCarousel from "../components/MovieCarousel";
import "../css/homePageContainer.css";

function HomePageContainer(props) {
    return (
        <div className="home-page-container">
            <MovieCarousel data={props.data}/>
        </div>
    )
}

export default HomePageContainer;