import React, { PropTypes } from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import ContactListForm from '../components/ContactListForm.jsx';


const name = [
  'John Smith',
  'Randal White',
  'Stephanie Sanders',
  'Banana',
  'Steve Brown',
  'Banana',
  
];

class ContactListPage extends React.Component {
  
  render () {
    return (

        <div>
          <div className="container-custom">
          
            <AutoComplete
              floatingLabelText="Search-box"
              filter={AutoComplete.fuzzyFilter}
              dataSource={name}
              maxSearchResults={5}
              />
      
          </div>

          <ContactListForm/>
          
        </div>

    );    
  }

}

export default ContactListPage;
