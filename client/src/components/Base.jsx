import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
// Full Stack (Uday Kumar)
const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Component Management</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign up</Link>
        <Link to="/add_contact">Add Contact</Link>
        <Link to="/contact_list">ContactList</Link>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};


export default Base;
