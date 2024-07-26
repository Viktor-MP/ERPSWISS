import drawList from "./draw.js";
import { cleanOldListDesk, cleanOldListMob, throughTheEl } from "./serve.js";




const openListHandler = (obj, e) => {
    e.stopPropagation()

    let currentTarget = e.currentTarget;
    let state = currentTarget.dataset.open;


    if (window.innerWidth < 992) {
        cleanOldListMob(currentTarget.parentElement.children);
    } else  {
        let parentDoc = currentTarget.parentElement;
        let last = parentDoc.parentElement.children;
        last = last[last.length - 1];

        throughTheEl(currentTarget.parentElement.children);
        cleanOldListDesk(parentDoc);
        parentDoc.parentElement.appendChild(last);
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
            currentTarget.parentElement.classList.add("passive");
            currentTarget.parentElement.insertAdjacentElement(
                "afterend",
                newUnList
            );
        }
    }
};

export { openListHandler };
