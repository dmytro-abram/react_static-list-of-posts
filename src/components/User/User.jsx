import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div>
    <span>
      {`${name}`}
    </span>
    <a href={`mailto: ${email}`}>{email}</a>
    <p>
      {`${address.city} ${address.street} st. ${address.suite}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};


export default User;
