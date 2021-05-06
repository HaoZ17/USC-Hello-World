import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux"
import "../css/movieCarousel.css";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MovieDetail from "./HomePageDetailCard";

const sharedStyle = {
    fontSize: "xxx-large",
    color: "lightgrey",
    margin: "50px",
    borderRadius: "20%",
    
    "&:hover": {
        borderRadius: "0",
        backgroundColor: "rgba(0, 0, 0, 1)",
        transition: "all 1s ease",
    }
}

const useStyles = makeStyles({
    backArrow: {
        ...sharedStyle,
    },
    forwardArrow: {
        ...sharedStyle,
    }
});


function MovieCarousel(props) {
    const classes = useStyles();
    const [count, setCount] = useState(0);
    const backDrops = useSelector(state => state.movieBackdrops);
    const posters = useSelector(state => state.moviePosters);

    const handleClickPrev = () => {
        
        if (count === 0) {
            setCount(props.data.length - 1);
        } else {
            setCount(count - 1);
        }
    }

    useEffect(()=>{
    
    }, [])

    
    
    const handleClickNext = () => {
        if (count < props.data.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
        console.log(count);
    }

    const createMovieDetail = (detail, index) => {
        return <MovieDetail 
            show={index === count ? true : false} 
            key={index} 
            data={{detail, backdropUrl: backDrops.get(detail.id), posterUrl: posters.get(detail.id)}} 
        />
    }

    const createAllMovieDetials = () => {
        return props.data.map((detail, index)=>{
            return createMovieDetail(detail, index)
        })
    }

    const movieDetail = props.data[count];

    return (
        <React.Fragment>
            <div className="carousel-container">
                <ArrowBackIcon className={classes.backArrow} onClick={handleClickPrev}/>
                { movieDetail ? createAllMovieDetials() : null}
                <ArrowForwardIcon className={classes.forwardArrow} onClick={handleClickNext}/>
            </div>
        </React.Fragment>

    )
}

export default MovieCarousel;
