import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/NavbarItems';

const Toolbar=(props)=>{
return(
<div className={styles.Toolbar}>
<Logo/>
<Navbar/>
</div>
)
}

export default Toolbar;