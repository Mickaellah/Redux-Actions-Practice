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

function users(user = "", action){
    switch(action.type) {
        case "UPDATE_USER":
            return action.payload
        default:
            return user
    }
}

function currentCity(state=""){
  return state;
}

function currentTemp(state=0){
  return state;
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

export function searchTexts(text) {
    return {
        type: "SEARCH_TEXTS",
        payload: text
    }
}

function searchText(state = "", action){
    switch(action.type) {
        case "SEARCH_TEXTS":
            return action.payload
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
