import ChangeTemperature from "../components/ChangeTemperature"
import CurrentCity from "../components/CurrentCity"

// function that returns an action type and a text value
export function addSpecialText(text) {
  return {
      type: "ADD_SPECIAL_TEXT",
      payload: text

  }
}

export function increase() {
  return {
      type: "INCREASE"
  }
}

export function decrease() {
  return {
      type: "DECREMENT"
  }
}

export function searchUser(firstName) {
  return {
      type: "SEARCH_USER",
      value: firstName
  }
}

export function sortUsers(currentUserSort) {
  return {
    type: "SORT_USERS",
    value: currentUserSort
  }
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    value: user
  }
}

export function removeUser() {
  return {
    type: "REMOVE_USER",
  }
}

export function setCurrentCity(currentCity) {
  return {
    type: "SET_CURRENT_CITY",
    value: currentCity
  }
}

export function setCurrentTemp(temp) {
  return {
    type: "SET_CURRENT_TEMP",
    value: temp
  }
}

export function uploadImageUrl(url) {
  return {
    type: "UPLOAD_IMAGE_URL",
    value: url
  }
}

export function scaleImage(scale) {
  return {
    type: "SCALE_IMAGE",
    value: scale
  }
}

export function showModal() {
  return {
    type: "SHOW_MODAL",
  }
}

export function getUser() {
  return async (dispatch) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await response.json();
    dispatch({
      type: "GET_USERS",
      value: users
    })
  }
}