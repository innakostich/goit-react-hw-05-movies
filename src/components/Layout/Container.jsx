import css from './Container.module.css';
import PropTypes from 'prop-types';
import React from 'react';

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.array.isRequired,
};