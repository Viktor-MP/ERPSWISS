import drawList from "./draw.js";
import { deleteAllDesk, cleanOldListMob, throughTheEl } from "./serve.js";

const openListHandler = (obj, e) => {
    e.stopPropagation();

    let currentTarget = e.currentTarget;
    let state = currentTarget.dataset.open;
    let parentDoc = currentTarget.parentElement;

    if (window.innerWidth < 992) {
        cleanOldListMob(parentDoc.children);
    } else {
        let last = parentDoc.parentElement.children;
        let docIndex = [...last].indexOf(parentDoc);

        deleteAllDesk(last, docIndex);
        throughTheEl(parentDoc.children);
    }

    if (state === "false") {
        const newUnList = document.createElement("ul");
        newUnList.classList.add("active");

        currentTarget.dataset.open = "true";

        drawList(obj, newUnList, currentTarget.id);

        if (window.innerWidth < 992) {
            currentTarget.classList.add("rotate180");
            currentTarget.insertAdjacentElement("beforeend", newUnList);
        } else {
            currentTarget.classList.add("arrow");
            parentDoc.classList.add("passive");
            parentDoc.insertAdjacentElement("afterend", newUnList);
        }
    }
};

export { openListHandler };
