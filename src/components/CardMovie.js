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
    liked:{
      
    },
}));

function RecipeReviewCard(props) {

  const curPage = props.curPage;
  const poster =props.poster;
  const likes = props.likes;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [movieList,setMovieList] = useState(false);
  const [liked,setLiked] = useState(false);


  const handleExpandClick = () => {
    // console.log(movieList);
    // console.log(id)
    // setMovieList(!movieList);
    // if(movieList==true){
      setExpanded(!expanded);
    // }
    
  };

  // const handleLiked =() =>{
  //   setLiked
  // }

  return (
    curPage.map((item,movieList,setMovieList,liked,setLiked) => { 
       return <Card className={classes.root} key={item.id}>
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
        
        <Grow in={expanded} timeout="auto" unmountOnExit >

          <CardContent>
            <Typography paragraph className={classes.description}>
             {item.overview}
            </Typography>
          </CardContent>
        </Grow>
        
        <CardActions disableSpacing>
          <IconButton className={classes.liked} aria-label="add to like-list" onClick={()=>{likes.addToLikedPage(item.id)}}>
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="add to block-list" onClick={()=>{likes.addToBlockPage(item.id)}}>
            <ThumbDownIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={()=>{handleExpandClick(item.id,movieList)}}
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