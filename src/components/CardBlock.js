import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { findByLabelText } from '@testing-library/dom';


import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    margin: "10px",

    opacity: 0,
    transformStyle : "preserve3D",
    animationName: "$root",
    animationDuration: `1s`,
    animationFillMode: "forwards",
    // transform : "translateX(0em) translateY(0em) perspective(0em) rotate(0deg) rotateX(0deg) rotateY(0deg)",

    transition: theme.transitions.create('all', {
      duration: "1s",
    }),
    '&:hover': {  
      backgroundColor: "red",
      transform: "translateX(10em)",
      '@media (hover: none)': {
        backgroundColor: 'transparent',
        transform: "translateX(0em)",
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
    height: 0,
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
  avatar: {
    backgroundColor: red[500],
  },

  textDesc: {
    position: "relative",
  },


}));

export default function RecipeReviewCard({content, actioncontroller}) {
  console.log("index",content.index)
  const classes = useStyles(content);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style = {{animationDelay: `${content.index*0.25}s`}}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MenuIcon/>
          </IconButton>
        }
        title={content.title}
        subheader={content.date}
      />

      <CardMedia 
            className={classes.media}
            image={content.poster}
            // title="Paella dish"
      />

      <CardContent className = {classes.textDesc}>
        <Typography variant="body2" color="textSecondary" component="p">
          {content.desc}
        </Typography>
      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <CancelIcon/>
        </IconButton>
        <IconButton aria-label="share">
          <FavoriteIcon/>
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



      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}