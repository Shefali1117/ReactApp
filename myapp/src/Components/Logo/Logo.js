import React from 'react';
import logo from '../../Images/logo.jpg';
import styles from './Logo.module.css';


const Logo=()=>{
    return(
    <>
        <img className={styles.Logo} src={logo} alt="Logo"/>
    </>);

}

export default Logo;