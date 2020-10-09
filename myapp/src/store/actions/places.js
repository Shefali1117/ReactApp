import * as actionTypes from './actionTypes';
import {places} from '../places';

export const renderPlaces=()=>({
   type:actionTypes.RENDER_PLACES,
    places:places
})

export const checkedField=()=>({
    type:actionTypes.CHECKED_FIELD,
    places:places
    
 })


 