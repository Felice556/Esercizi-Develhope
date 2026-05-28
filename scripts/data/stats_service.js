import { getAccessTokenFromLocalStorage } from "./auth_service.js"

const API_URL = "https://develhope.alexcalovi.dev/api"

export function getStats() {
    return fetch(API_URL + "/statistics", {
            headers: {
                "Authorization": "Bearer " + getAccessTokenFromLocalStorage().access_token
            }
        })
        .then((response) => response.json())
        .then((json) => {
            return [
                { label: "Media voti esercizi", value: json.media_voti_esercizi, maxValue: json.media_voti_esercizi_max },
                { label: "Media voti test", value: json.media_voti_test, maxValue: json.media_voti_test_max },
                { label: "Esercizi completati", value: json.esercizi_completati, maxValue: json.esercizi_completati_max },
            ]
        })
}