import React, {useState} from "react";
import "../css/movieCarousel.css";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const sharedStyle = {
    fontSize: "xxx-large",
    color: "lightgrey",
    position: "relative"
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
    
    const handleClickPrev = () => {
        if (count == 0) {
            setCount(props.data.length - 1);
        } else {
            setCount(count - 1);
        }
    }

    const handleClickNext = () => {
        if (count < props.data.length - 1) {
            setCount(count + 1);
        } else {
            setCount(0);
        }
    }

    return (
        <React.Fragment>
            <div className="carousel-container">
                <ArrowBackIosIcon className={classes.backArrow} onClick={handleClickPrev}/>
                    <div className="mock-card">{props.data[count] ? `Movie ID: ${props.data[count].id}` : null}</div>
                <ArrowForwardIosIcon className={classes.forwardArrow} onClick={handleClickNext}/>
            </div>
        </React.Fragment>

    )
}

export default MovieCarousel;
