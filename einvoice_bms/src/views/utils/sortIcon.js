import {ref} from "vue";

let asc = ref(true);
let currentType = ref("");
let currentsortType = ref("");

function changeType(sorter) {
    currentsortType = sorter;
    if (currentType === "" && sorter !== "") {
        currentType = sorter;
    }
    if (currentType === sorter) {
        console.log("changeType裡面!")
    }
    currentsortType = sorter;
    //要記asc.value的改變
    return currentsortType;
}

function changeIcon(sort) {
    if (currentsortType === sort) {
        if (asc.value) {
            return "sort-up";
        } else {
            return "sort-down";
        }
    } else {
        return "sort";
    }
}


