import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../css/movieCarousel.css"
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardProto from "./CardProto";
import {CARD, POSITION_ABS} from "./Constants"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: CARD.ROOT_MAX_WIDTH,
    minWidth: CARD.ROOT_MIN_WIDTH,

    maxHeight : CARD.ROOT_MAX_HEIGHT,

    display: "flex",
    flexDirection: "column",
    margin: "10px",

    opacity: 0,
    transformStyle : "preserve3D",
    animationName: "$root",
    animationDuration: CARD.ROOT_ANIMATION_DURATION,
    animationFillMode: "forwards",
    transition: theme.transitions.create('all', {
      duration: CARD.ROOT_TRANSITION_DURATION,
    }),
    '&:hover': {  
      // backgroundColor: "red",
      marginTop:"-5px",
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      
    }
  },

  rootOnHide : {
    display: "none",
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

  textDesc: {
    position: "absolute",
    marginTop:"69.25%",
    backgroundColor: "white",
    animationName: "$textin",
    animationFillMode: "forward",
    animationDuration: CARD.TEXT_DESC_ANIMATION_DURATION,
    opacity: CARD.TEXT_DESC_OPACITY,
  },

  "@keyframes textin": {
    "0%": {
      opacity: 0,
      transform : "translateY(50em)",
    },
    "100%": {
      opacity: CARD.TEXT_DESC_OPACITY,
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
      opacity: CARD.TEXT_DESC_OPACITY,
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
    position : CARD.SHOW_DETAIL_POSITION,
    top: CARD.SHOW_DETAIL_TOP,
  },

  cancelDetailButton : {
    // display: "fixed", 
    zIndex: 10000, 
    transform : CARD.CANCEL_DETAIL_BUTTON_TRANSFORM,
    padding: CARD.CANCEL_DETAIL_BUTTON_PADDING,
    fontSize : CARD.CANCEL_DETAIL_BUTTON_FONT_SIZE,
    backgroundColor: CARD.CANCEL_DETAIL_BUTTON_BGCOLOR,
    borderRadius: CARD.CANCEL_DETAIL_BUTTON_BORDER_RADIUS,
    borderShadow: CARD.CANCEL_DETAIL_BUTTON_BORDER_SHADOW,
    '&:hover': {  
      backgroundColor: CARD.CANCEL_DETAIL_BUTTON_HOVER_BGCOLOR,
      opacity: CARD.CANCEL_DETAIL_BUTTON_HOVER_OPACITY,
    }
  },

  cardActions : {
    zIndex: 5,
  }
}));

export default function RecipeReviewCard({content, actionController, setDetailGlobal, globalOnDetail}) {
  const classes = useStyles(content);

  const handleClick1 = () => {
    console.log("moved to like page")
    actionController.addToLikedPage(content.id)
  }

  const handleClick2 = () => {
    console.log("removed from block page")
    actionController.removeFromBlockPage(content.id)
  }

  const states = {classes, content, globalOnDetail}
  const handlers = {handleClick1, handleClick2, setDetailGlobal}

  return CardProto(states, handlers, FavoriteIcon, CancelIcon)
}