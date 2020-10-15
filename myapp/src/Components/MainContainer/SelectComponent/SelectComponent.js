import React,{Component} from 'react';
import styles from './SelectComponent.module.css';

class SelectedComponent extends Component{
    render(){
        console.log(this.props.selected);
        let values=null;
        let arr=[];
        let selecteditems=this.props.selected.selected;
         if(selecteditems&&selecteditems.size>0){
        for (let ele of selecteditems.entries()) {
            if(ele[1]===true){
                arr.push(ele[0]);
            }
          }
       values= arr.map(ele=>{return <div className={styles.boxes} key={ele}>{ele}<i className="fa fa-close"></i></div>})
    }else{
        values=<h1>No value selected.</h1>
    }
        
        return(

            <div>{values}</div>
        );
    }
}

export default SelectedComponent;