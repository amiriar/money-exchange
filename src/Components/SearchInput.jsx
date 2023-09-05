import React from 'react';
import { Form } from 'react-bootstrap';

const SearchInput = ({ value, onChange }) => {
  return (
    <Form.Group controlId="searchInput">
      <Form.Control
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default SearchInput;
