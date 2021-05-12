import React from 'react';
import { useStyles } from './CardSharedStyles';
import "../css/movieCarousel.css"
import CancelIcon from '@material-ui/icons/Cancel';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardProto from "../HOCs/CardProto";
import PropTypes from 'prop-types';

function RecipeReviewCard({content, actionController, setDetailGlobal, globalOnDetail}) {
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

RecipeReviewCard.propTypes = {
  content: PropTypes.object,
  actionController: PropTypes.object,
  setDetailGlobal: PropTypes.func,
  globalOnDetail: PropTypes.number
}

export default RecipeReviewCard;