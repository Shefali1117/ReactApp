import React from 'react';
import NavbarItem from '../Navbar/Items/NavbarItem';
import styles from './NavbarItems.module.css';

const Navbar=(props)=>{
    return (
        <div className={styles.nav}>
        <ul className={styles.Navbar}>
            <NavbarItem link="/home" exact>Home</NavbarItem>
            <NavbarItem link="/portfolio">My Portfolio</NavbarItem>
            <NavbarItem link="/clients">Clients</NavbarItem>
        </ul>
        <button className={styles.btn}>Get In Touch</button>
        </div>
    );

}

export default Navbar;