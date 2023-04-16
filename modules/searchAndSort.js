"use strict";

export function sortItemsByName(itemArr) {
    itemArr.sort((a, b) => a.name.localeCompare(b.name));
    console.log("Sorted by name!");
}