const addItemButton = document.getElementById("add-item");
let taskName;
const listItem = document.querySelector(".list__item");
const appList = document.querySelector(".app__list");
let itemName

function changeTitle(){

}

function checkbox(t){
    console.log(t.classList);
    console.log(t.classList.contains("item__checkbox-lable--checked"));
    if(t.classList.contains("item__checkbox--checked")){
        newItem.classList.remove("list__item--completed");
        t.classList.remove("item__checkbox--checked");
    } else {
        newItem.classList.add("list__item--completed");
        t.classList.add("item__checkbox--checked");
    }   
}
function createButtons(){
    (event.target.id == "list-checkbox") && checkbox(event.target);
    console.log(event.target);
    (event.target.id == "change-btn") && changeTitle();
};

function createItem(value) {
    newItem = listItem.cloneNode(true);
    itemName = newItem.querySelector(".item__title");
    itemName.textContent = value;
    appList.appendChild(newItem);
    newItem.addEventListener("click", event =>{
        createButtons();
    });

}

addItemButton.addEventListener("click", event => {
    event.preventDefault();
    taskName = document.getElementById("task-name").value;
    createItem(taskName);
});

