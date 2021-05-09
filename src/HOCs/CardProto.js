import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MovieDetail from "../components/HomePageDetailCard";
import "../css/movieCarousel.css"
import MenuIcon from '@material-ui/icons/Menu';
import CallReceivedIcon from '@material-ui/icons/CallReceived';



export default function CardProto ({classes, content, globalOnDetail},
                                    {handleClick1, handleClick2, setDetailGlobal},
                                    WrappedButton1, WrappedButton2 ) {

    const [onHoverOuter, setHover1] = React.useState(false);
    const customizedClass = (onHoverOuter)? classes.textDesc : classes.textHide;
    const handleMoreClick = (number) => {
      setDetailGlobal(number)
    }
    const handleOnHover = (type,e) => {setHover1(!onHoverOuter)}

    return (
        <>
        <div className = {globalOnDetail === content.id ? classes.showDetail + " carousel-container": classes.hideDetail}>
    
          <IconButton aria-label="cancel" className = {classes.cancelDetailButton} onClick = {() => handleMoreClick(-1)}>
            <CallReceivedIcon />
          </IconButton>
    
          <MovieDetail  
            data = {{detail: content.data, backdropUrl: content.backdrop, posterUrl: content.poster,}} 
            show = {true}/>
        </div>
        <Card 
        className = {globalOnDetail !== -1 ? classes.rootOnHide:classes.root}
        style = {{animationDelay: `${content.index*0.25}s`}}
        onMouseEnter = {(e) => handleOnHover("enter", e)} 
        onMouseLeave = {(e) => handleOnHover("leave", e)} 
         >
        <CardHeader
            action={
              <IconButton onClick = {() => handleMoreClick(content.id)} aria-label="settings">
                <MenuIcon />
              </IconButton>
            }
            titleTypographyProps={{variant:'subtitle2' }}
            title={content.title}
            subheader={content.date}
            />
    
        <CardMedia 
            className={classes.media}
            image={content.poster}
            />
    
        <CardContent 
            id = "textdesc"
            pointerEvents = "none"
            className = {customizedClass}>
            <Typography  variant="body2" color="textSecondary" component="p">
              {content.desc.substring(0,100) + "..."}
            </Typography>
        </CardContent>
    
        <CardActions 
        disableSpacing className = {classes.cardActions}>
            <IconButton aria-label="add to favorites" onClick = {handleClick1}>
                <WrappedButton1 />
            </IconButton>
            <IconButton aria-label="share" onClick = {handleClick2}>
                <WrappedButton2 />
            </IconButton>
        </CardActions>
        </Card>
        </>
    )
}