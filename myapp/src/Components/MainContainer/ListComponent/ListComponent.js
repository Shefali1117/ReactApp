import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import styles from "./ListComponent.module.css";
import ListElements from './ListElements/ListElements';

class List extends Component {
  componentDidMount() {
    this.props.fetchPlaces();
  }
  render() {
    let countrydata = null;
    let heading=null;
    if (this.props.places.length !== 0) {
      let countries = this.props.places;
      countrydata=countries.map(country=>{return <div key={country.heading}><h2>{country.heading}</h2> 
        <ListElements countries={country.value}/></div>})
      
    }
        
    return (
      <div className={styles.box}>
        {countrydata}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    places: state.place.place,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaces: () => dispatch(actions.renderPlaces()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
