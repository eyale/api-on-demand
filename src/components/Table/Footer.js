import React, { useState } from 'react';
import { Table, Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Footer = ({ count, onPageChanged, pageLimit, pageNeighbours }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [skip, setSkip] = useState(15);

  const totalPages = Math.ceil(count / pageLimit);

  const gotoPage = page => {
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const step = currentPage !== 1 ? 15 : 0;

    let skip;

    if (currentPage <= 2) {
      skip = step;
    } else {
      skip = step * currentPage;
    }

    const params = { skip, take: pageLimit };

    setCurrentPage(currentPage);
    onPageChanged(params);
  };

  const handleClick = (page, evt) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = evt => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = evt => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();

  if (!count) {
    return null;
  }

  if (totalPages === 1) {
    return null;
  }

  return (
    <Table.Row>
      <Table.HeaderCell colSpan="16">
        <Menu floated="right" pagination>
          <Menu.Item as="a" icon onClick={handleMoveLeft}>
            <Icon name="chevron left" />
          </Menu.Item>
          {pages.map((page, index) => {
            return currentPage === page ? (
              <Menu.Item as="span" key={index.toString()} active>
                {page}
              </Menu.Item>
            ) : (
              <Menu.Item
                as="a"
                key={index.toString()}
                onClick={e => handleClick(page, e)}>
                {page}
              </Menu.Item>
            );
          })}
          <Menu.Item as="a" icon onClick={handleMoveRight}>
            <Icon name="chevron right" />
          </Menu.Item>
        </Menu>
      </Table.HeaderCell>
    </Table.Row>
  );
};

Footer.defaultProps = {
  onPageChanged: () => null,
  pageLimit: 15,
  pageNeighbours: null,
};

Footer.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
};
export default Footer;
