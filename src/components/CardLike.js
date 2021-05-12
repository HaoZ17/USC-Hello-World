import { useStyles } from './CardSharedStyles';
import "../css/movieCarousel.css"
import CancelIcon from '@material-ui/icons/Cancel';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import CardProto from "../HOCs/CardProto";
import PropTypes from 'prop-types';

function RecipeReviewCard({content, actionController, setDetailGlobal, globalOnDetail}) {
  const classes = useStyles(content);

  const handleClick1 = () => {
    console.log("moved to blocked page")
    actionController.addToBlockPage(content.id)
  }

  const handleClick2 = () => {
    console.log("removed from liked page")
    actionController.removeFromLikedPage(content.id)
  }

  const states = {classes, content, globalOnDetail}
  const handlers = {handleClick1, handleClick2, setDetailGlobal}
  return CardProto(states, handlers, SentimentVeryDissatisfiedIcon, CancelIcon)
}

RecipeReviewCard.propTypes = {
  content: PropTypes.object,
  actionController: PropTypes.object,
  setDetailGlobal: PropTypes.func,
  globalOnDetail: PropTypes.number
}

export default RecipeReviewCard;