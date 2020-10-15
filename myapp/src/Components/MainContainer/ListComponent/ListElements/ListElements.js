import React, { Component } from "react";
import styles from '../ListComponent.module.css';
import { connect } from "react-redux";


class ListElements extends Component{
  
  state = {
      checkedItems: new Map(),
    }

    handleChange = (e) =>{
      const item = e.target.name;
      const isChecked = e.target.checked;
      this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      this.props.selected({selected:this.state.checkedItems});
    }
  

    render(){
      console.log(this.state.checkedItems);
        let country=null;
        if (this.props.countries.length !== 0) {
      let countries = this.props.countries;
      country = countries.map((country) => {
        return(
        <ul key={country.name} className={styles.List}>
          <li>
           <input
              type="checkbox"
              onClick={(e) => this.handleChange(e)}
              defaultChecked={this.state.checkedItems.get(country.name)}
              value={country.name}
              name={country.name}
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
    return{
        places:state.place.isChecked
    }
}



export default connect(mapStateToProps)(ListElements);