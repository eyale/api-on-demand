import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';

import { searchUsers } from '../store/reducers/search/actions';

const Search = ({ search, signUp, searchUsers }) => {
  const searchParams = {
    isDescending: true,
    skip: 0,
    take: 10,
  };
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    const data = {
      ...searchParams,
      ...{ search: value },
      token: signUp.token.access_token,
    };

    searchUsers(data);
  };
  const handleChange = e => setValue(e.target.value);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="item-wrapper" widths="4">
          <Form.Input
            placeholder="Name"
            name="name"
            value={value}
            onChange={handleChange}
            icon="search"
          />
          <Form.Button content="Search" loading={search.loading} />
        </Form.Group>
      </Form>
    </>
  );
};

const mapStateToProps = state => ({
  search: state.search,
  signUp: state.signUp,
});
const mapDispatchToProps = {
  searchUsers,
};

Search.defaultProps = {};

Search.propTypes = {
  search: PropTypes.object.isRequired,
  signUp: PropTypes.object.isRequired,
  searchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
