import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
export function increase(count = 1) {
    return {
        type: "INCREASE",
        payload: count
    }
}

export function decrease(count = 1) {
    return {
        type: "DECREMENT",
        payload: count
    }
}

function currentCount(state = 0, action){
  switch(action.type) {
    case "INCREASE":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default :
        return state
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
export function updateUsers(users) {
    return {
        type: "UPDATE_USER",
        payload: users
    }
} 

function users(user = {
    id: 0,
    name: "",
    address: "",
    phone: 0,
    occupation: "",
    avatar: ""
}, action){
    switch(action.type) {
        case "UPDATE_USER":
            return {
                ...user,
                ...action.payload
            }
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
export function addSpecialText(text) {
    return {
        type: "ADD_SPECIAL_TEXT",
        payload: text
    }
}

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
