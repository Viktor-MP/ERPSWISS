import { ScheduleApp } from "./source/source.js";
import drawList from "./service/draw.js";
import { deleteAllDesk, throughTheEl } from "./service/serve.js";
const activeList = document.querySelector(".active");

window.addEventListener(
    "resize",
    function (event) {
        if (event.target.innerWidth < 992) {
            deleteAllDesk(activeList.parentElement.children, 0);
            throughTheEl(activeList.children);
            activeList.classList.add("small")
        } else {

            activeList.classList.remove("small")
            
        }
    },
    true
);

drawList(ScheduleApp, activeList, "root");
