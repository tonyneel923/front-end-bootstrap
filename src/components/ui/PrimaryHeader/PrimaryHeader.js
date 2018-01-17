import React from 'react';
import { NavLink } from 'react-router-dom';

// must have extension .module.* in order for css-modules to recognize it
import styles from './PrimaryHeader.module.scss';

const PrimaryHeader = () => (
  <div>
    <h1>Welcome to our app!</h1>
    <div className={styles.nav}>
      <NavLink to="/" exact activeClassName={styles.active} className={styles.navItem}>Home</NavLink>
      <NavLink to="/users/3" activeClassName={styles.active} className={styles.navItem}>Users</NavLink>
      <NavLink to="/products" activeClassName={styles.active} className={styles.navItem}>Products</NavLink>
    </div>
  </div>
);

export default PrimaryHeader;
