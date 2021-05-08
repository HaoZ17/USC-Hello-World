import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../css/movieCarousel.css"
import CancelIcon from '@material-ui/icons/Cancel';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CardProto from "./CardProto";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,

    display: "flex",
    flexDirection: "column",
    margin: "10px",

    opacity: 0,
    transformStyle : "preserve3D",
    animationName: "$root",
    animationDuration: `1s`,
    animationFillMode: "forwards",
    transition: theme.transitions.create('all', {
      duration: "0.5s",
    }),
    '&:hover': {  
    //   backgroundColor: "red",
        marginTop:"-5px",
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      
    }
  },

  "@keyframes root": {
    "0%": {
      opacity: 0,
      transform : "translateX(50em) translateY(50em) perspective(30em) rotate(90deg) rotateX(-45deg) rotateY(-180deg)"
    },
    "100%": {
      opacity: 1,
      transform : "translateX(0em) translateY(0em) perspective(0em) rotate(0deg) rotateX(0deg) rotateY(0deg)"
    }
  },

  media: {
    height: 50,
    paddingTop: '56.25%', // 16:9
    
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  textDesc: {
    position: "absolute",
    marginTop:"69.25%",
    backgroundColor: "white",
    animationName: "$textin",
    animationFillMode: "forward",
    animationDuration: `0.25s`,
    opacity: 0.75,
  },

  "@keyframes textin": {
    "0%": {
      opacity: 0,
      transform : "translateY(50em)",
    },
    "100%": {
      opacity: 0.75,
      transform : "translateY(0em)",
    }
  },

  textHide : {
    position: "absolute",
    marginTop:"69.25%",
    backgroundColor: "white",
    animationName: "$textout",
    animationFillMode: "both",
    animationDuration: `0.25s`,
    opacity: 0,
    transform: "translateY(0em)"
  },

  "@keyframes textout": {
    "0%": {
      opacity: 0.75,
      transform : "translateY(0em)",
      display : "absolute",
    },
    "100%": {
      opacity: 0, 
      transform : "translateY(10em)",
      display: "none",
    }
  },

  hideDetail : {
    display: "none",
    opacity: 0,
  },

  showDetail : {
    position : "absolute",
    paddingTop : "50vh",
    zIndex: 3,
  },

  cancelDetailButton : {
    display: "fixed", 
    zIndex: 1000000, 
    transform : "translateX(90vw) translateY(-35vh)",
    fontSize : "xx-large",
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: "50%",
    '&:hover': {  
      backgroundColor: "white",
      opacity: 0.5,
    }
  },

  cardActions : {
    zIndex: 5,
  }
}));

export default function RecipeReviewCard({content, actionController}) {
  const classes = useStyles(content);

  const handleClick1 = () => {
    console.log("moved to blocked page")
    actionController.addToBlockPage(content.id)
    
  }

  const handleClick2 = () => {
    console.log("removed from liked page")
    actionController.removeFromLikedPage(content.id)
  }

  const states = {classes, content}
  const handlers = {handleClick1, handleClick2}

  return CardProto(states, handlers, SentimentVeryDissatisfiedIcon, CancelIcon)
}