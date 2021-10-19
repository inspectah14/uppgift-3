let list = document.querySelector("#list");
let passenger = document.querySelector("#passenger");
let queue = [];
let listContainer = document.querySelector("#list-container");
let thirdHeading = document.querySelector("h3");

const createListItem = () => {
    let listItem = document.createElement("li");
    listItem.innerText = passenger.value;
    listItem.className = "passName";

    return listItem
}

let queueButton = document.querySelector("#add-queue");
queueButton.addEventListener("click", () => {
    if (passenger.value === "") {
        alert("Please enter a name.");
    } else {
        queue.push(passenger.value);
        let listItem = createListItem()
        list.appendChild(listItem);
        passenger.value = "";
        thirdHeading.remove();
        console.log(queue); //* För att påvisa att arrayen uppdateras korrekt
    }
})

let ftButton = document.querySelector("#fast-track");
ftButton.addEventListener("click", () => {
    if (passenger.value === "") {
        alert("Please enter a name.");
    } else {
        queue.unshift(passenger.value);
        let firstSibling = document.querySelector("#list").firstElementChild; 
        let listItem = createListItem()
        list.insertBefore(listItem, firstSibling);
        passenger.value = "";
        thirdHeading.remove();
        console.log(queue); //* För att påvisa att arrayen uppdateras korrekt
    }
})

let removeButton = document.querySelector("#remove");
removeButton.addEventListener("click", () => {
    queue.splice(0, 1);
    let firstChild = document.querySelector("#list").firstElementChild; 
    firstChild?.remove();
    passenger.value = "";
    console.log(queue); //* För att påvisa att arrayen uppdateras korrekt
    if(list.childElementCount === 0) {
        listContainer.appendChild(thirdHeading);
    }
})
