import { navigateTo, LOGIN_ROUTE } from "./utility/navigation.js";
import { removeAccessTokenFromLocalStorage } from "./data/auth_service.js";
import { getUser } from "./data/user_service.js";
import { getStats } from "./data/stats_service.js";
import { getCourses } from "./data/courses_service.js";

getUser().then((user) => renderUser(user));
getStats().then((stats) => renderStats(stats));
getCourses().then((courses) => renderCourses(courses));

document.addEventListener("DOMContentLoaded", function () {
  // here we are sure that the HTML (DOM) is fully loaded
  listenLogoutButton();
});

function renderUser(user) {
  let userNameSpan = document.getElementsByClassName("user-name")[0];

  userNameSpan.textContent = user.name + " " + user.surname;
}

function renderStats(stats) {
  let userStatsContainer = document.getElementsByClassName(
    "user-stats-container",
  )[0];

  stats.forEach((stat) => {
    let newHtmlStat = `<div class="user-stats">
            <span>${stat.value}/${stat.maxValue}</span>
            <br>
            <span>${stat.label}</span>
        </div>`;

    userStatsContainer.innerHTML += newHtmlStat;
  });
}
function renderCourses(courses) {
  let totaleCompletati = 0;
  let totaleDisponibili = 0;
  let totaleVideo = 0;
  courses.forEach((course) => {
    totaleCompletati += course.esercizi_completati;
    totaleDisponibili += course.esercizi_disponibili;
    totaleVideo += course.numero_video;
  });

  let percentuale = Math.round((totaleCompletati / totaleDisponibili) * 100);

  let userVideosStats = document.getElementsByClassName(
    "user-video-container",
  )[0];
  userVideosStats.innerHTML += `
 
    <span class="user-video-label" style="color:white;">${totaleVideo} video</span>
    <span class="user-course-started-label" style="color:white;">Corso iniziato: 03 marzo 2026</span>
    <div class="progress-container">
      <span>${percentuale}% completato</span>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${percentuale}%"></div>
      </div>
    </div>
`;

  let coursesCointainer =
    document.getElementsByClassName("courses-container")[0];
  courses.forEach((course) => {
    let newHtmlCourse = `<div class ="course-card">
        <span class="course-name">${course.nome}</span>
        <span class="course-video-count">${course.numero_video} <span class="course-video-label">video</span></span>
        <span class="course-exercises-completed">${course.esercizi_completati}/${course.esercizi_disponibili}</span>
        <button class="courses-container-button">Vai</button>
     
       </div>
        `;
    coursesCointainer.innerHTML += newHtmlCourse;
  });
}

function listenLogoutButton() {
  let logoutButton = document.querySelector(".logout-button");
  logoutButton.addEventListener("click", () => {
    removeAccessTokenFromLocalStorage();
    navigateTo(LOGIN_ROUTE);
  });
}
