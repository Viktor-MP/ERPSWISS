const checkIsObj = (list) => {
    for (let li in list) {
        if (Array.isArray(list[li])) {
            return list[li];
        }
    }
};

const wordReturner = (list) => {
    if (list.name) return list.name;
    let word = ""
    for (let li in list) {
        if (typeof li === "string") {
            word =  li;
        } else if (typeof list[li] === "string") {
            word = list[li];
        }
    }
    return word
};

const clearTargetEv = (tar) => {
    tar.classList.remove("arrow");
    tar.parentElement.classList.remove("passive")
    tar.classList.remove("rotate180");
    tar.dataset.open = "false";
};

const throughTheEl = (childs) => {
    for (let i = 0; i < childs.length; i++) {
        clearTargetEv(childs[i]);
    }
};

const cleanOldListMob = (parentChilds) => {
    for (let child of parentChilds) {
        let id = child.id;
        if (child.dataset.open === "true") {
            parentChilds[id].classList.remove("rotate180");
            parentChilds[id].dataset.open = "false";
            child.children[1].remove();
        }
    }
};

const cleanOldListDesk = (targetPar) => {
    if (targetPar.nextElementSibling.localName === "UL") {
        return cleanOldListDesk(targetPar.nextElementSibling);
    }

    return targetPar.nextElementSibling.remove();
};

export {
    checkIsObj,
    throughTheEl,
    wordReturner,
    cleanOldListMob,
    cleanOldListDesk,
};
