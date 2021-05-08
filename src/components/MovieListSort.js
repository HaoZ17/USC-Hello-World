import React,{useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
  expand: {
    transform: 'rotate(180deg)',
  }
});

export default function IconLabelTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [sortByDate,setSortByDate] = useState(false);
  const [sortByTitle,setSortByTitle] = useState(false);
  const [sortByVote,setSortByVote] = useState(false);
  const [sortByRate,setSortByRate] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSortDate = () =>{
    props.sorts.timeSort();
    setSortByDate(!sortByDate);
  }

  const handleSortTitle = () =>{
    props.sorts.titleSort();
    setSortByTitle(!sortByTitle);
  }

  const handleSortVote = () =>{
    props.sorts.voteSort();
    setSortByVote(!sortByVote);
  }

  const handleSortRate = () =>{
    props.sorts.rateSort();
    setSortByVote(!sortByVote);
  }

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
        <Tab icon={<ArrowDownwardTwoToneIcon className={{[classes.expand]:sortByDate}}/>} label="Release Date"  onClick={()=>{handleSortDate()}}/>
        <Tab icon={<ArrowDownwardTwoToneIcon className={{[classes.expand]:sortByTitle}}/>} label="Title" onClick={()=>{handleSortTitle()}}/>
        <Tab icon={<ArrowDownwardTwoToneIcon className={{[classes.expand]:sortByVote}}/>} label="Vote Count" onClick={()=>{handleSortVote()}}/>
        <Tab icon={<ArrowDownwardTwoToneIcon className={{[classes.expand]:sortByRate}}/>} label="Vote Average" onClick={()=>{handleSortRate()}}/>
      </Tabs>
    </Paper>
  );
}
