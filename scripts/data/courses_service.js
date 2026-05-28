import { getAccessTokenFromLocalStorage } from "./auth_service.js"
const API_URL = "https://develhope.alexcalovi.dev/api";

export function getCourses() {
 return fetch(API_URL + "/courses", {
             headers: {
                 "Authorization": "Bearer " + getAccessTokenFromLocalStorage().access_token
             }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Risposta corsi:", data);
      return data;
    });
}
