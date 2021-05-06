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

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sortBy,setSortBy] = useState(false)
  console.log(sortBy)

//   handlesort = (e) => {
//       e.preventDefault();
//   }

//   const toggleSort= (e) => {
//       if(e.target.value == ture){
//         return {``}
//       }
//   }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
        onClick={()=>setSortBy(!sortBy)}
      >
        <Tab icon={<ArrowDownwardTwoToneIcon />} label="Release Date" />
        <Tab icon={<FavoriteIcon />} label="Title" />
        <Tab icon={<PersonPinIcon />} label="Vote Count" />
        <Tab icon={<FavoriteIcon />} label="Vote Average" />
      </Tabs>
    </Paper>
  );
}
