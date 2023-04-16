"use strict";
import { sortItemsByName } from "./modules/searchAndSort.js";
import { displayAllItems } from "./modules/displayFuncs.js";

window.addEventListener("load", main);

function main() {
    const DataURL = "test.json";
    getData(DataURL)
        .then(response => displayAllItems(response))
        .catch(err => { throw new Error(`Error at main: ${err}`) });
}

/* ========== CREATE ========== */
function addData(dbURL, data) {
    fetch(dbURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log("Data added successfully!");
            }else {
                throw new Error("Bad response at addData.");
            }
        })
        .catch(err => {
            throw new Error(`Error at addData: ${err}`)
        });
}
function getData(dbURL) {
    return fetch(dbURL)
        .then(response => {
            if (response.ok) {
                console.log("Data retrieved successfully!");
                return response.json();
            } else {
                throw new Error("Bad response at getData.");
            }
        })
        .catch(err => {
            throw new Error(`Error at getData ${err}`);
        });
}
/* ========== UPDATE ========== */
function updateData(dbURL, updatedData) {
    fetch(dbURL + "/" + updatedData.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: updatedData.id
        })
    })
        .then(response => {
            if (response.ok) {
                console.log("Data updated successfully!");
            }
            else {
                throw new Error("Bad response at updateData");
            }
        })
        .catch(err => {
            throw new Error(`Error at updateData: ${err}`);
        });
}
/* ========== DELETE ========== */
function deleteData(dbURL, dataID) {
    fetch(dbURL + "/" + dataID, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: dataID
        })
    })
        .then(response => {
            if (response.ok) {
                console.log("Data deleted successfully!");
            }
            else {
                throw new Error("Bad response at deleteData");
            }
        })
        .catch(err => {
            throw new Error(`Error at deleteData: ${err}`);
        });
}