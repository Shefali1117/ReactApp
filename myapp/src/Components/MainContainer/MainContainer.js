import React,{Component} from 'react';
import styles from './MainContainer.module.css';
import List from './ListComponent/ListComponent';

class MainContainer extends Component{
    render(){
        return(<div className={styles.maincontainer}>
            <div className={styles.container}><List/></div>
        </div>)
    }
}

export default MainContainer;