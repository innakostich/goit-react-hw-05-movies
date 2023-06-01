import React from 'react';
import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="#555" />
    </div>
  );
};

export default Loader;
