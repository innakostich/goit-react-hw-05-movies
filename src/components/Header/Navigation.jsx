import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact="true" to="/" className={css.link} activeclassname={css.active}>
      Home
    </NavLink>

    <NavLink exact="true" to="/movies" className={css.link} activeclassname={css.active}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
