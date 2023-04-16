"use strict";

export function displayAllItems(itemArr) {
    document.querySelector("#item-list").innerHTML = "";
    for(const item of itemArr){
        displayItem(item);
    }
}

function displayItem(item) {
    const myHTML = /*html*/`
    <li>${item.name}</li>`;
    document.querySelector("#item-list").insertAdjacentHTML("beforeend", myHTML);
}