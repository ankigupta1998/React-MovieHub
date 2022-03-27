import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieCreationIcon from '@material-ui/icons/MovieCreation';
import SearchIcon from '@material-ui/icons/Search';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position:'fixed',
    bottom:0,
    backgroundColor: '#802BB1',
    zIndex:100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history =useNavigate();

  useEffect(()=>{
    if(value=== 0) history('/');
    else if(value === 1) history('/movies');
    else if(value === 2) history ('/search');

  },[value,history])

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{color:"#D1D7E0"}} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{color:"#D1D7E0"}} label="Movies" icon={<MovieCreationIcon />} />
      <BottomNavigationAction style={{color:"#D1D7E0"}} label="search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}