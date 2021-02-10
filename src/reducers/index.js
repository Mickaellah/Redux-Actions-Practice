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
        case "ADD_USER":
            return [...state, action.value]
        case "REMOVE_USER":
            return state.slice(0, state.length - 1);
        case "GET_USERs":
          return action.value 
        default:
            return state
    }
}

function currentCity(state="", action){
	switch(action.type) {
		case "SET_CURRENT_CITY": 
			return action.value
		default:
			return state
	}
}

function currentTemp(state = 0, action){
    switch(action.type) {
        case "SET_CURRENT_TEMP":
			return action.value
		default: 
		return state
    }
}

function displayModal(state=false, action){
  switch(action.type) {
    case "SHOW_MODAL":
      return !state
    default:
      return state;
  }
}

function imageUrl(state="", action){
  switch(action.type) {
    case "UPLOAD_IMAGE_URL":
      return action.value
    default:
      return state
  }
}

function currentUserSort(state="first_name", action){
    switch(action.type) {
        case "SORT_USERS":
            return action.value
        default:
            return state
    }

}

function imageScale(state=1, action){
  switch(action.type) {
    case "SCALE_IMAGE":
      return action.value
    default:
      return state
  }
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
