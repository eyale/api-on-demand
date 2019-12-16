import React, { useState } from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './table.scss';

const HeaderCell = ({ colums, onClick }) => {
  const [direction, setDirection] = useState('descending');
  const [column, setColumn] = useState(null);
  const [descending, setDescending] = useState(false);

  const handleClick = name => {
    setColumn(name);
    setDirection('ascending');
    setDescending(!descending);
    const directionType =
      direction === 'ascending' ? 'descending' : 'ascending';

    setDirection(directionType);
    const params = {
      isDescending: descending,
      orderBy: name,
    };

    onClick(params);
  };

  return Object.values(colums).map(item => {
    const headerClick = () => handleClick(item.orderBy);

    if (item.id === 10) {
      return (
        <Table.HeaderCell className="table-header__item" key={item.id}>
          {item.name}
        </Table.HeaderCell>
      );
    }
    return (
      <Table.HeaderCell
        className="table-header__item"
        key={item.id}
        sorted={column === item.orderBy ? direction : null}
        onClick={headerClick}>
        {item.name}
      </Table.HeaderCell>
    );
  });
};

const Header = ({ colums, onClick }) => {
  return (
    <Table.Row className="table-header">
      <HeaderCell colums={colums} onClick={onClick} />
    </Table.Row>
  );
};

Header.propTypes = {
  colums: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Header;
