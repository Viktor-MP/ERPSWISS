import { ScheduleApp } from "./source/source.js";
import drawList from "./service/draw.js";
const activeList = document.querySelector(".active");

window.addEventListener(
    "resize",
    function (event) {
        if (event.target.innerWidth < 992) {
            activeList.classList.add("small")
        } else {
            activeList.classList.remove("small")
        }
    },
    true
);

drawList(ScheduleApp, activeList, "root");
