import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const styles = {
  
  cardWidth: {
    width: "90%",
  },
  
};

class ContactListForm extends React.Component {
render () {
    return (
 
  <Card className="container" style={styles.cardWidth}>
   <h2 className="card-heading">contact-list</h2>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn> 
        <TableHeaderColumn><Link to="">show</Link></TableHeaderColumn>

      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>John Smith</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>       
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>

      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Randal White</TableRowColumn>
        <TableRowColumn>Unemployed</TableRowColumn>
        
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Stephanie Sanders</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>4</TableRowColumn>
        <TableRowColumn>Steve Brown</TableRowColumn>
        <TableRowColumn>Employed</TableRowColumn>
        <TableHeaderColumn><Link to="/contact_details">show</Link></TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>
  </Card>
    )
  }
}

export default ContactListForm;

