import { getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { alertTemplate } from "./templates.mjs";
import { getAlertsData } from "./parkService.mjs";
import { getVisitorCenterData } from "./parkService.mjs";
import { visitorCenterTemplate } from "./templates.mjs";
import { getActivitiesData } from "./parkService.mjs";
import { activitiesTemplate } from "./templates.mjs";

async function setAlerts(data) {
    const alertInfo = document.querySelector(".alerts > ul");
  
    const html = data.map(alertTemplate).join("");
    alertInfo.insertAdjacentHTML("afterbegin", html);
}

async function setVisitorCenters(data) {
    const visitorCenterInfo = document.querySelector(".visitorServices > details > ul");

    const html = data.map(visitorCenterTemplate).join("");
    visitorCenterInfo.insertAdjacentHTML("afterbegin", html);
}

async function setActivityInfo(data) {
    const activityInfo = document.querySelector(".activities ul");

    const html = activitiesTemplate(data);
    activityInfo.insertAdjacentHTML("afterbegin", html);

}

async function init() {
  const parkData = await getParkData();
  const alertData = await getAlertsData("cany");
  const visitorCenterData = await getVisitorCenterData("cany");
  const activityData = await getActivitiesData("cany");



  setHeaderFooter(parkData);
  setAlerts(alertData);
  setVisitorCenters(visitorCenterData);
  setActivityInfo(activityData);
}

init();

