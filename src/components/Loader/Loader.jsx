import React from 'react';
import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <BeatLoader color="#506f70" />
    </div>
  );
};

export default Loader;
