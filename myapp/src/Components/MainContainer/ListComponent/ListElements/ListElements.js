import React, { Component } from "react";
import styles from '../ListComponent.module.css';
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";

class ListElements extends Component{

    handleChange=(event,checked)=>{
        if(!checked){
            console.log(event.target);
            return event.target.checked
        }
    }

    render(){
        let country=null;
        if (this.props.countries.length !== 0) {
      let countries = this.props.countries;
      country = countries.map((country) => {
        return(
        <ul key={country.name} className={styles.List}>
          <li>
           <input
              type="checkbox"
              onClick={!country.isChecked}
              checked={country.isChecked}
              value={country.name}
            />{country.name}
          </li>
        </ul>

        )
    })
}
return (
    <>
    {country}
    </>
  );
}
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        places:state.place.isChecked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      checked: () => dispatch(actions.checkedField()),
    };
  };


export default connect(mapStateToProps,mapDispatchToProps)(ListElements);