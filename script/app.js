const addItemButton = document.getElementById("add-item");
let taskName;
const listItem = document.querySelector(".list__item");
const appList = document.querySelector(".app__list");
let itemName


function createItem(value) {
    newItem = listItem.cloneNode(true);
    itemName = newItem.querySelector(".item__title");
    itemName.textContent = value;
    appList.appendChild(newItem);
}

addItemButton.addEventListener("click", event => {
    event.preventDefault();
    taskName = document.getElementById("task-name").value;
    createItem(taskName);
});