const ACCESS_TOKEN_KEY = "access_token";
const API_URL = "https://develhope.alexcalovi.dev/api";

export function getAccessTokenFromLocalStorage() {
  return JSON.parse(localStorage.getItem(ACCESS_TOKEN_KEY));
}

export function saveAccessTokenInLocalStorage(json) {
  localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(json));
}

export function isAccessTokenPresentInLocalStorage() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function removeAccessTokenFromLocalStorage() {
  //localStorage.clear()
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function login(username, password) {
  return fetch(API_URL + "/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: username,
      password: password,
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Wrong credentials");
      }
    })
    .then((json) => {
      saveAccessTokenInLocalStorage(json);
      return json;
    });
}
