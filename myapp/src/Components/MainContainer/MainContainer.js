import React,{Component} from 'react';
import styles from './MainContainer.module.css';
import List from './ListComponent/ListComponent';
import Selected from './SelectComponent/SelectComponent';

class MainContainer extends Component{

    state = {
        selected: new Map(),
      };
    
      selectedItems = (event) => {
        this.setState({ selected: event });
      };
    
    render(){
        return(<div className={styles.maincontainer}>
            <div className={styles.containerList}><List selecteditems={this.selectedItems}/></div>
            <div className={styles.containerSelected}><Selected selected={this.state.selected}/></div>
        </div>)
    }
}

export default MainContainer;