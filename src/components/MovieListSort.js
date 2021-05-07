import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
});

export default function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [sortBy,setSortBy] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<ArrowDownwardTwoToneIcon />} label="Release Date"  onClick={()=>{props.sorts.timeSort()}} />
        <Tab icon={<ArrowDownwardTwoToneIcon />} label="Title" onClick={()=>{props.sorts.titleSort()}}/>
        <Tab icon={<ArrowDownwardTwoToneIcon />} label="Vote Count" onClick={()=>{props.sorts.voteSort()}}/>
        <Tab icon={<ArrowDownwardTwoToneIcon />} label="Vote Average" onClick={()=>{props.sorts.rateSort()}}/>
      </Tabs>
    </Paper>
  );
}
