import React, {PropTypes} from 'react';
import ContactShowForm from '../components/ContactShowForm.jsx';
import ContactListForm from '../components/ContactListForm.jsx';
// var details = { 
//     John: {
//       name:"John" ,
//       email:"john233@jhdfg.com" ,
//       address: "ejhfr",
      
//     },
//     Robin: {
//       name:"Robin" ,
//       email:"hgf@kjrh.dfh",
//       address:"ewfgiu" ,
//     },
//     Piter: {
//       name: "Piter"
//       email:"UFGU@EEJRGH.wsg" ,
//       address: "rsghfrwyj",
//     },
//     Jackson:{
//       name: "Jackson",
//       email: "egjjh",
//       address: "rgh",
//     },
//     Robinson:{
//       name:"Robinson" ,
//       email:"fdgj@hk.sfhs" ,
//       address: "efeef",
//     }  
//   };  

const john = [
  '  Name: John Smith',
  '  email-id : ejhgkjd@gmail.com',
  '  address: Delhi',
  '  education: M.Sci',
  
];
class ContactShowPage extends React.Component {  
// 	constructor(props) {
//     super(props);

//     // set the initial component state
//     this.state = {
//       errors: {},
//       user: {
//         email: 'jkhdfjks',
//         password: 'sfgdfh'
//       }
//     };
// }

  render(){ 
    return (
    	<div>
        <ContactShowForm
       	john={john}
        />
        </div>
       
      );
}
}

export default ContactShowPage;



