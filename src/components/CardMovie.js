import React from 'react';
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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import poster from '../images/avengers_poster.jpg'
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 800,
    margin: '1rem',
    width: '25rem', 
    zIndex: 0,
  },
  media: {
    height: '13rem',
    paddingTop: '56.25%', // 16:9
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
    }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="vote-avg" className={classes.avatar}>
            10
          </Avatar>
        }

        // <Fab variant="extended" >
        // <NavigationIcon className={classes.extendedIcon} />
        action={
          <Fab aria-label="vote-count" className={classes.extendedIcon} variant="extended">
            Vote Count: 111
          </Fab>
        }
        title="Avegeners --- END GAME"
        subheader="September 14, 2018"
        
        
        
      />
      <CardMedia
        className={classes.media}
        image={poster}
        title="movie title"
      />

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <IconButton aria-label="add to like-list">
          <ThumbDownIcon />
        </IconButton>
        <IconButton aria-label="add to block-list">
          <ThumbUpIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
     
    </Card>
  );
}
