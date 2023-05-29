import React from 'react';
import css from './Loader.module.css';
import { BeatLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="#555" />
    </div>
  );
};

export default Loader;
