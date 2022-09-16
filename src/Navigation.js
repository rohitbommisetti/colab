import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, styled } from '@mui/material';
const routes = ['/', '/about', 'team'];

const ColabTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#1890ff',
  },
});

const ColabTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightBold,
  marginRight: theme.spacing(1),
  color: 'rgba(0, 0, 0, 0.85)',
  fontSize: '1.25rem',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#000000',
    opacity: 1,
  },
  '&.Mui-selected': {
    backgroundColor: '#000000',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Navigation = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top" role="navigation">
        <ColabTabs
          sx={{
            margin: '27px'
          }}
        >
          <div className=" d-flex flex-row justify-content-around w-100">
            <ColabTab value={routes[0]} label="Home" component={Link} to={routes[0]} />
            <ColabTab value={routes[1]} label="About" component={Link} to={routes[1]} />
            <ColabTab value={routes[2]} label="Team" component={Link} to={routes[2]} />
          </div>
        </ColabTabs>
      </nav>
      <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <ColabTabs
          sx={{
            margin: '27px'
          }}
        >
          <div className=" d-flex flex-row justify-content-around w-100">
            <ColabTab value={routes[0]} label="Home" component={Link} to={routes[0]} />
            <ColabTab value={routes[1]} label="About" component={Link} to={routes[1]} />
            <ColabTab value={routes[2]} label="Team" component={Link} to={routes[2]} />
          </div>
        </ColabTabs>
      </nav>
    </div>
  )
};

export default Navigation;