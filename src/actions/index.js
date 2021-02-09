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

export function filterUserName(name) {
    return {
      type: "FILTER_USERNAME",
      payload: name
    }
}

export function changeTemperature(temp = 1) {
  return {
    type: "CHANGE_TEMPERATURE",
    payload: temp
  }
}

export function currentCity(text) {
    return {
        type: "CURRENT_CITY",
        payload: text
    }
}