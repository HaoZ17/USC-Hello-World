import React, {useState} from 'react';
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
// import poster from '../images/avengers_poster.jpg'
import Fab from '@material-ui/core/Fab';
import Grow from '@material-ui/core/Grow';



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

  // const [hoverStatus,setHoverStatus] = useState(new Map());
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [description,setDescription] = useState(false);
  // const [liked,setLiked] = useState(false);
  const [onHover, setHover] = React.useState(false);


  const hanleHoverStatus =() =>{
    curPage.map((item)=>{
      statusMap.set(item.id,false) 
    })
    // statusMap.set(460465,false)
    // console.log(statusMap)
  }


  const handleExpandClick = (id) => {
      // setExpanded(!expanded);
      statusMap.set(id,!statusMap.get(id));
      // console.log(statusMap)
      // console.log(statusMap.get(id))
  };

  return (
    hanleHoverStatus(),
    curPage.map((item) => { 
      
       return <Card className={classes.root}>
        <button onClick={()=>{statusMap.set(item.id,false) }}>
          test
        </button>
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
          // subheader={movieListId}
          
          
          
        />
        <CardMedia
          className={classes.media}
          image= {poster.get(item.id)}
          title={item.title}
        />
        
        <Grow in={statusMap.get(item.id)} timeout="auto" unmountOnExit >

          <CardContent>
            <Typography paragraph >
             {item.overview}
            </Typography>
          </CardContent>
        </Grow>
      

        <CardActions disableSpacing>
          <IconButton 
          className={classes.liked} 
          aria-label="add to like-list" 
          onClick={()=>{likes.addToLikedPage(item.id)}}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton 
          aria-label="add to block-list" 
          onClick={()=>{likes.addToBlockPage(item.id)}}>
            <ThumbDownIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: statusMap.get(item.id),
            })}
            onClick={()=>{handleExpandClick()}}
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