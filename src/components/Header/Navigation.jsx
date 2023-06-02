import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={css.link} activeClassName={css.active}>
      Home
    </NavLink>

    <NavLink to="/movies" className={css.link} activeClassName={css.active}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
