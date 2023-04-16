"use strict";
import { sortItemsByName } from "./modules/searchAndSort.js";
import { displayAllItems } from "./modules/displayFuncs.js";

window.addEventListener("load", main);

async function main() {
    const DataURL = "test.json";
    try {
        const items = await getData(DataURL);
        displayAllItems(items); 
    }
    catch (err) {
        throw new Error(`Error at main: ${err}`);
    }
}

/* ========== CREATE ========== */
async function addData(dbURL, data) {
    try {
        const response = await fetch(dbURL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        if (response.ok) {
            console.log("Data added successfully!");
        }
        else {
            throw new Error("Bad response at addData.");
        }
    }
    catch (err) {
        throw new Error(`Error at addData: ${err}`);
    }
}
/* ========== READ ========== */
async function getData(dbURL) {
    try {
        const response = await fetch(dbURL);
        if (response.ok) {
            console.log("Data retrieved successfully!");
            return await response.json();
        }
        else {
            throw new Error("Bad response at getData.");
        }
    }
    catch (err) {
        throw new Error(`Error at getData: ${err}`);
    }
}
/* ========== UPDATE ========== */
async function updateData(dbURL, updatedData) {
    try {
        const response = await fetch(dbURL +"/"+ updatedData.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: updatedData.id
            })
        })
        if (response.ok) {
            console.log("Data updated successfully!");
        }
        else {
            throw new Error("Bad response at updateData");
        }
    }
    catch (err) {
        throw new Error(`Error at updateData: ${err}`);
    }
}
/* ========== DELETE ========== */
async function deleteData(dbURL, dataID) {
    try {
        const response = await fetch(dbURL + "/" + dataID, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: dataID
            })
        })
        if (response.ok) {
            console.log("Data deleted successfully!");
        }
        else {
            throw new Error("Bad response at deleteData");
        }
    }
    catch (err) {
        throw new Error(`Error at deleteData: ${err}`);
    }
}