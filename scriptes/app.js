const DONE ="item--done";
const appList = document.querySelector(".list");
const input = document.getElementById("input");
const data = localStorage.getItem("LIST");
let LIST = [];
let id = 0;

function deleteItem (element){
    element.parentNode.removeChild(element);
    console.log(element.id);
    LIST.forEach((el, i) =>{
        if(el.id === +element.id){
            console.log(i);
            LIST.splice(i,1);

        }
    });    

    localStorage.setItem("LIST", JSON.stringify(LIST));
}

function switchCheckbox (element){
    element.classList.toggle(DONE);
    LIST[element.id].done = !LIST[element.id].done;
}

function addItem (itemName,id, done, deleted){
    const text = `
        <li class = "item list__item" id = "${id}" >
            <div class="item__checkbox" id="checkbox"></div>
            <p class="item__name"> ${itemName} </p>
            <button class="item__button button" id="deleteButton">Delete</button>
        </li>
    `;

    appList.insertAdjacentHTML("beforeend", text);
}

appList.addEventListener("click", event => {
    currentItem = event.target.parentNode;
    event.target.id === "checkbox" && switchCheckbox(currentItem); 
    event.target.id === "deleteButton" && deleteItem(currentItem);
});

window.addEventListener("submit", event => {
    console.log("ggg");
    event.preventDefault();
    const itemName = input.value;
    if(itemName){
        addItem(itemName,id,false,false);
        LIST.push({
            name: itemName,
            id: id,
            done: false,
            deleted: false
        });
        localStorage.setItem("LIST", JSON.stringify(LIST));
    } else {
        alert("can't be empty");
    }
    input.value = "";
    id++;

});

function loadList(){
    LIST = JSON.parse(data);
    LIST.forEach(element => {
        addItem(element.name, element.id, element.done, element.deleted);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    
    console.log("loaded");
    if(data){
        loadList();
    }
});