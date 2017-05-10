import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {colors} from 'material-ui/styles';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 0,
    marginBottom: 5,
    fontWeight: 400,
  },
  cardWidth: {
  	width: "90%",
  },
  tabDiv: {
  	paddingLeft: 10,
  	paddingRight: 10,
  },
  default_tab:{
    color: colors.grey500,
    backgroundColor: colors.grey50,
    fontWeight: 400,
  },
  active_tab:{
    color: colors.deepOrange700,
  }
};

styles.tab = []
styles.tab[0] = styles.default_tab;
styles.tab[1] = styles.default_tab;
styles.tab[2] = styles.default_tab;
styles.tab[3] = styles.default_tab;
// styles.tab[this.setState.slideIndex] = objectAssign({},   styles.tab[this.setState.slideIndex], styles.active_tab);

const HomePage = () => (
  <Card style={styles.cardWidth} className="container">

    <CardTitle title="Home Page" />
    
  </Card>
);

export default HomePage;


