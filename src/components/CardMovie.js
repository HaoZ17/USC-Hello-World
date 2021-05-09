import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import poster from '../images/avengers_poster.jpg'
import Fab from '@material-ui/core/Fab';

import { bindActionCreators } from "redux";
import {actions} from '../actionsConst/actionCreater'
import { connect , useSelector} from "react-redux";





const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 800,
    margin: '1rem',
    width: '25rem', 
    zIndex: 0,
  },
  media: {
    height: '13rem',
    paddingTop: '56.25%', 
    '&:hover': {
        
        "& $description":{
        display:'none',
        }
    }
  },
  expand: {
    transform: 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
    }
}));

function RecipeReviewCard(props) {

  const curPage = props.curPage;
  const poster =props.poster;
  const likes = props.likes;
  // console.log(curPage);
  // console.log(poster)
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [numLike, setLike] = useState(0);
  const likedSet = props.likedList;
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    curPage.map((item,index) => { 
       return <Card className={classes.root} key={index}>
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
          title="movie title"
        />
        
        <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.description}>

          <CardContent>
            <Typography paragraph>
             {item.overview}
            </Typography>
          </CardContent>
        </Collapse>
        
        <CardActions disableSpacing>
          <IconButton color = {likedSet.has(item.id)? "secondary" : "inherit"}aria-label="add to like-list" onClick={()=>{
            likes.addToLikedPage(item.id);
            setLike(Array.from(likedSet.keys()).length)
            }}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="add to block-list" color = {"inherit"} onClick={()=>{likes.addToBlockPage(item.id)}}>
            <ThumbDownIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-expanded={expanded}
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