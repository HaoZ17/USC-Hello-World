import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';
import { bindActionCreators } from "redux";
import {actions} from '../actionsConst/actionCreater'
import { connect , useSelector} from "react-redux";
import PropTypes from 'prop-types';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
    width: '25rem', 
    zIndex: 0,
    justifyContent: "flex-start",
    position: "relative"
  },
  media: {
    height: '13rem',
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
    extendedIcon: {
    marginRight: theme.spacing(1),
    marginTop:'0.5rem',
    },
    description:{
      display:'block',
      backgroundColor: "rgba(255, 255, 255, 0.58)",
      maxHeight: "fit-content",
      maxWidth: "25rem",
      padding:"3px",
      "&.p":
      {fontWeight: "bold",}
    },
    textDesc: {
      position: "absolute",
      marginTop:"69.25%",
      marginLeft:"0.3em",
      marginRight: "0.3em",
      backgroundColor: "white",
      animationName: "$textin",
      animationFillMode: "forward",
      animationDuration: `0.25s`,
      opacity: 0.75,
    },
}));

function RecipeReviewCard(props) {

  const curPage = props.curPage;
  const poster =props.poster;
  const likes = props.likes;
  const statusMap = new Map();

  const [hoverStatus,setHoverStatus] = useState(new Map());
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [numLike, setLike] = useState(0);
  const likedSet = props.likedList;
  

  const hanleHoverStatus =() =>{
    curPage.map((item)=>{
      statusMap.set(item.id,false) 
    })

  }


  const handleExpandClick = (id) => {

      setHoverStatus(new Map(hoverStatus.set(id,!hoverStatus.get(id))));
      
  };

  return (
    hanleHoverStatus(),
    curPage.map((item) => { 
      
       return <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="vote-avg" className={classes.avatar}>
             <div>{item.vote_average}</div> 
            </Avatar>
          }


          action={
            <Fab aria-label="vote-count" className={classes.extendedIcon} variant="extended">
              <div>Vote Count:{item.vote_count}</div>
            </Fab>
          }
          title={item.original_title}
          subheader={item.release_date}
        />
        <CardMedia
          className={classes.media}
          image= {poster.get(item.id)}
          title={item.title}
        />
        
        <Grow in={hoverStatus.get(item.id)} style={{ position: "absolute", bottom:"10%"}} timeout="auto" unmountOnExit >
          <CardContent className={classes.description} >
            <p>
             {item.overview}
            </p>
          </CardContent>
        </Grow>
      

        <CardActions disableSpacing>
          <IconButton color = {likedSet.has(item.id)? "secondary" : "inherit"}aria-label="add to like-list" onClick={()=>{
            likes.addToLikedPage(item.id);
            setLike(Array.from(likedSet.keys()).length)
            }}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton 
          aria-label="add to block-list" 
          onClick={()=>{likes.addToBlockPage(item.id)}}>
            <ThumbDownIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: hoverStatus.get(item.id)
            })}
            onClick={()=>{handleExpandClick(item.id)}}
            // aria-expanded={statusMap.get(item.id)}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>

        </CardActions>
      
      </Card>
    })
  )
}
export default RecipeReviewCard