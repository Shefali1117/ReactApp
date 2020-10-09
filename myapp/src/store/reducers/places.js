import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility/utility';

const initialState={
    place:[{heading:'',value:[{name:'',isChecked:false}]}]
}


const renderPlaces=(state,action)=>{
    let places=[];
    places=action.places;
return(updateObject(state,{
    place:places
    }
))
}

const checkedField=(state,action)=>{
   return updateObject(state,{isChecked:true})
    
}


const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.RENDER_PLACES:return renderPlaces(state,action);
        case actionTypes.CHECKED_FIELD:return checkedField(state,action);
        default:return state;
    }
}
export default reducer;