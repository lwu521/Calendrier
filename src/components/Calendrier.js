import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import SeancesF from './SeancesFiltrer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={7}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    margin: '3%',
    border: '1px solid'
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const time7 = moment().format('YYYY-MM-DD'); 
  const time6 = moment().subtract(1,'days').format('YYYY-MM-DD'); 
  const time5 = moment().subtract(2,'days').format('YYYY-MM-DD');  
  const time4 = moment().subtract(3,'days').format('YYYY-MM-DD'); 
  const time3 = moment().subtract(4,'days').format('YYYY-MM-DD'); 
  const time2 = moment().subtract(5,'days').format('YYYY-MM-DD'); 
  const time1 = moment().subtract(6,'days').format('YYYY-MM-DD'); 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab value="one" label={time1} {...a11yProps('one')} />
          <Tab value="two" label={time2} {...a11yProps('two')} />
          <Tab value="three" label={time3} {...a11yProps('three')} />
          <Tab value="four" label={time4} {...a11yProps('four')} />
          <Tab value="five" label={time5} {...a11yProps('five')} />
          <Tab value="six" label={time6} {...a11yProps('six')} />
          <Tab value="seven" label={time7} {...a11yProps('seven')} />
        </Tabs>
      </AppBar>

      <TabPanel value={value} index="one">
        <SeancesF date={time1}/>
      </TabPanel>
      <TabPanel value={value} index="two">
        <SeancesF date={time2}/>
      </TabPanel>
      <TabPanel value={value} index="three">
        <SeancesF date={time3}/>
      </TabPanel>
      <TabPanel value={value} index="four">
        <SeancesF date={time4}/>
      </TabPanel>
      <TabPanel value={value} index="five">
        <SeancesF date={time5}/>
      </TabPanel>
      <TabPanel value={value} index="six">
        <SeancesF date={time6}/>
      </TabPanel>
      <TabPanel value={value} index="seven">
       <SeancesF date={time7}/>
      </TabPanel>

    </div>
  );
}
