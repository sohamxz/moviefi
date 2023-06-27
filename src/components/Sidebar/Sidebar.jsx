import { React, useEffect } from 'react';
import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

import useStyles from './styles';

const lightLogo = 'https://fontmeme.com/permalink/230627/ec7d52f2b78ac37568a05991c0265367.png';
const darkLogo = 'https://fontmeme.com/permalink/230627/20cc84d3636dd4eca67421becdd12430.png';

const demoGenres = [
  { label: 'Comedy', value: 'comedy' },
  { label: 'Action', value: 'action' },
  { label: 'Horror', value: 'horror' },
  { label: 'Animation', value: 'animation' },
];
const demoCategories = [
  { label: 'Popular', value: 'popular' },
  { label: 'Top Rated', value: 'top_rated' },
  { label: 'Upcoming', value: 'upcoming' },
];

function Sidebar({ setMobileOpen }) {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}> { /*site logo*/ }
        <img
          className={classes.image}
          src={theme.palette.mode === 'light' ? lightLogo : darkLogo}
          alt="Moviefi Site Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => {}} //will be implemented later
              button
            >
              {/*<ListItemIcon>
                <img src={...} className={classes.genreImages} height={30} />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoGenres.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              onClick={() => {}} //will be implemented later
              button
            >
              {/*<ListItemIcon>
                <img src={...} className={classes.genreImages} height={30} />
              </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
