import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    
    textAlign: 'center',
    
    boxShadow:'none !important' 
  },
  paperRight:{
   flex: 1,
    height: '100%',
    
    textAlign: 'center',
    
    boxShadow:'none !important'
  }
};

const ContactForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (

  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Contact</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}
      <div style={styles.div}>
        <Paper  style={styles.paperLeft} >
          <div className="field-line">
            <TextField
              floatingLabelText="Name"
              name="name"
              onChange={onChange}
              errorText={errors.name}
              value={user.name}
            />
          </div>
          </Paper>
         <Paper style={styles.paperRight}>
          <div className="field-line">
            <TextField
              floatingLabelText="Email"
              name="email"
              errorText={errors.email}
              onChange={onChange}
              value={user.email}
            />
          </div>
          </Paper>
          </div>
          <div style={styles.div}>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <TextField
              floatingLabelText="Mobile No."
              name="mobile_no"
              onChange={onChange}
              errorText={errors.mobile_no}
              value={user.mobile_no}
            />
          </div>
          </Paper>
          <Paper style={styles.paperRight}>
          <div className="field-line">
            <TextField
              floatingLabelText="Education"
              name="education"
              onChange={onChange}
              errorText={errors.education}
              value={user.education}
            />
          </div>
          </Paper>
          </div>
          <div style={styles.div}>
          <Paper style={styles.paperLeft}>
          <div className="field-line">
            <TextField
              floatingLabelText="Address"
              name="address"
              onChange={onChange}
              errorText={errors.address}
              value={user.address}
            />
          </div>
          </Paper>
          </div>
          <div className="button-line">
            <RaisedButton type="submit" label="Add Contact" primary />
          </div>
    </form>
  </Card>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default ContactForm;
