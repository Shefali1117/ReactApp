import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './NavbarItem.module.css';


const NavbarItem=(props)=>{
    return(<><li className={styles.NavbarList}>
        <NavLink className={styles.NavbarEle} to={props.link} exact={props.exact}
          activeClassName={styles.active}>{props.children}
        </NavLink></li></>);
}

export default NavbarItem;
