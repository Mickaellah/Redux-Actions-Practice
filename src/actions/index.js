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

export function searchUserName(firstName) {
    return {
      type: "SEARCH_USERNAME",
      payload: firstName
    }
}

export function updateUsers() {
  return {
      type: "UPDATE_USER"
  }
}