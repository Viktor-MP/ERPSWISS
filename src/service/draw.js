import { openListHandler } from "./events.js";
import { wordReturner, checkIsObj } from "./serve.js";

const drawList = (list, where, id) => {

    if (where.id === "root" && window.innerWidth < 992) {
        where.classList.add("small");
    }

    for (let li in list) {
        let unList = document.createElement("li");
        let par = document.createElement("p");
        par.className = "listTitle";

        const listObj = checkIsObj(list[li]);

        listObj?
            unList.addEventListener("click", (e) =>
                openListHandler(listObj, e)
            ):
        unList.classList.add("noMoreList");

        unList.dataset.open = "false";

        unList.classList.add("category_btn");

        par.innerText = wordReturner(list[li]);
        unList.appendChild(par);

        unList.id = id + li;

        where.appendChild(unList);
    }
};

export default drawList;
