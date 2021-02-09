import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number


function currentCount(state = 0, action){
  switch(action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default :
        return state
  }
}

// incomplete reducer function that should check an action prop type to return an array of users 

function users(state = [], action){
    switch(action.type) {
        
        default:
            return state
    }
}

function currentCity(state="", action){
	switch(action.type) {
		case "CURRENT_CITY": 
			return action.payload
		default:
			return state
	}
}

function currentTemp(state = 0, action){
    switch(action.type) {
        case "CHANGE_TEMPERATURE":
			return state + action.payload
		default: 
		return state
    }
}

function displayModal(state=false){
  return state;
}

function imageUrl(state=""){
  return state
}

function currentUserSort(state="first_name"){
  return state;
}

function imageScale(state=1){
  return state
}


function searchText(state = "", action){
    switch(action.type) {
        case "SEARCH_USER":
            return action.value
        default:
            return state
    }
}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value


function specialText(state = "", action) {
    switch(action.type) {
        case "ADD_SPECIAL_TEXT":
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
