import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux"
import "../css/movieCarousel.css";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import MovieDetail from "./HomePageDetailCard";
import PropTypes from 'prop-types';

const sharedStyle = {
    fontSize: "xxx-large",
    color: "lightgrey",
    margin: "50px",
    borderRadius: "20%",
    zIndex: 1000,
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
    const [timer, setTimer] = useState(null);

    const handleClickPrev = () => {
        if (count === 0) {
            setCount(props.data.size - 1);
        } else {
            setCount(count - 1);
        }
    } 
    
    const handleClickNext = () => {
        if (count < props.data.size - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }

    useEffect(() => {
        console.log("component did update!")
        clearTimeout(timer);
        setTimer(setTimeout(handleClickNext, 10000));
    }, [count])


    const createMovieDetail = (detail, index) => {
        return <MovieDetail 
            show={index === count ? true : false} 
            key={index} 
            data={{detail, backdropUrl: backDrops.get(detail.id), posterUrl: posters.get(detail.id)}} 
        />
    }

    const createAllMovieDetials = () => {
        
        return Array.from(moviesInfo.keys()).map((key, index)=>{
            return createMovieDetail(moviesInfo.get(key), index)
        })
    }

    const moviesInfo = props.data;

    return (
        <React.Fragment>
            <div className="carousel-container">
                <ArrowBackIcon className={classes.backArrow} onClick={handleClickPrev}/>
                {createAllMovieDetials()}
                <ArrowForwardIcon className={classes.forwardArrow} onClick={handleClickNext}/>
            </div>
        </React.Fragment>

    )
}

MovieCarousel.propTypes = {
    data: PropTypes.object
}

export default MovieCarousel;
