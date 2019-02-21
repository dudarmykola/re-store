import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
};

BookListItem.propTypes = {};

export default BookListItem;