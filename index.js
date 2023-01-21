import createTaskTemplate from './TaskTemplate.js';
import modalFunction from './modal.js';
import { Open } from './Open.js';
import { createDetailPad } from './text_Area_Detailed_Pad.js';
import localStorageUpdation from './localStorageUpdation.js';




// const ticked_radio = document.getElementsByClassName('radio');
const add_task = document.getElementById('addTask');
let task_text_Area;
let idOfDetail;

export const block_Event = document.querySelectorAll('.block');

export let Open_Block_Element = document.getElementById('Open');
export let InProgress_Block_Element = document.getElementById('In-Progress');
export let InReview_Block_Element = document.getElementById('In-Review');
export let Done_Block_Element = document.getElementById('Done');

const template_div = document.getElementsByClassName('template-div');
const template_div_Open = document.getElementsByClassName('template-div-Open');
const template_div_InProgress = document.getElementsByClassName('template-div-InProgress');
const template_div_InReview = document.getElementsByClassName('template-div-InReview');
const template_div_Done = document.getElementsByClassName('template-div-Done');

export let Open_Block_Array = [];
export let inReview_Block_Array = [];
export let Done_Block_Array = [];
export let inProgress_Block_Array = [];
export let detailOfTask_Array = [];


//this condition is checking if Local Storge is not Emplty so it wil Iterate using map and create div element and append the div element fetched from Local Storage.
if (JSON.parse(localStorage.getItem("Open"))) {  // fetching data for Open Container.
    Open_Block_Array = JSON.parse(localStorage.getItem("Open"));
    console.log(Open_Block_Array);
    Open_Block_Array.map((obj) => {

        const taskTemplate = document.createElement('div');
        taskTemplate.className = "template-div";

        let template;
        for (let key in obj) {
            template = obj[key];
        }

        const templateNode = document.createRange().createContextualFragment(template);
        taskTemplate.appendChild(templateNode);
        Open_Block_Element.appendChild(taskTemplate);
    });
}


if (JSON.parse(localStorage.getItem("InProgress"))) {     // fetching data for InProgress Container.
    inProgress_Block_Array = JSON.parse(localStorage.getItem("InProgress"));
    // console.log(Open_Block_Array);
    inProgress_Block_Array.map((obj) => {


        const taskTemplate = document.createElement('div');

        taskTemplate.className = "template-div";

        let template;
        for (let key in obj) {
            template = obj[key];
        }

        const templateNode = document.createRange().createContextualFragment(template);
        taskTemplate.appendChild(templateNode);
        InProgress_Block_Element.appendChild(taskTemplate);
    });
}

if (JSON.parse(localStorage.getItem("InReview"))) {   // fetching data for InReview Container.
    inReview_Block_Array = JSON.parse(localStorage.getItem("InReview"));
    // console.log(Open_Block_Array);
    inReview_Block_Array.map((obj) => {

        const taskTemplate = document.createElement('div');
        taskTemplate.className = "template-div";

        let template;
        for (let key in obj) {
            template = obj[key];
        }

        const templateNode = document.createRange().createContextualFragment(template);
        taskTemplate.appendChild(templateNode);
        InReview_Block_Element.appendChild(taskTemplate);
    });
}


if (JSON.parse(localStorage.getItem("Done"))) {      // fetching data for Done Container.
    Done_Block_Array = JSON.parse(localStorage.getItem("Done"));
    // console.log(Open_Block_Array);
    Done_Block_Array.map((obj) => {

        const taskTemplate = document.createElement('div');
        taskTemplate.className = "template-div";

        let template;
        for (let key in obj) {
            template = obj[key];
        }

        const templateNode = document.createRange().createContextualFragment(template);
        taskTemplate.appendChild(templateNode);
        Done_Block_Element.appendChild(taskTemplate);
    });
}


if (JSON.parse(localStorage.getItem("detailOfTask"))) {
    detailOfTask_Array = JSON.parse(localStorage.getItem("detailOfTask"));
}



let draggableTodo = null;
let dropped = false;

for (let box of template_div) {
    box.addEventListener("dragstart", dragStart);
    box.addEventListener("dragend", dragEnd);
}


function dragStart(event) {
    if (dropped) {
        event.preventDefault();
    }
    else {
        draggableTodo = this;
        setTimeout(() => {
            this.style.display = "none";
        }, 0);
        console.log("dragStart");
    }

}

function dragEnd() {
    draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
    console.log("dragEnd");
    dropped = true;
    location.reload();
}

block_Event.forEach((status) => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
    //   console.log("dragOver");
}

function dragEnter(e) {
    // console.log(e);
    this.style.border = "1px dashed #ccc";
    console.log("dragEnter");
}

function dragLeave(e) {
    // console.log(e);
    this.style.border = "none";
    console.log("dragLeave");
}

function dragDrop(e) {
    // console.log(e);
    let id = draggableTodo.parentNode.id;
    // console.log(draggableTodo.parentNode.id);
    this.style.border = "none";
    this.appendChild(draggableTodo);
    console.log("dropped");

    localStorageUpdation(id, this.id, draggableTodo);
}




for (const box of template_div_Open) {
    //For of Loop for Open Section.

    box.addEventListener('click', (e) => {// Event If I click on any taskTemplate it will fetch the id of the that template. and on click it will 

        idOfDetail = box.getAttribute('for');
        // console.log(e.target.parentNode.parentNode.parentNode.id);
        // console.log(box.parentNode.parentNode.id);
        if (box.parentNode.parentNode.id === "Open" || e.target.parentNode.parentNode.parentNode === "Open") {

            let classOfDiv = e.target.classList.toString();
            // console.log(box.getAttribute('for'));
            // console.log(classOfDiv);

            const [modal, flexDiv, closeButton, task_Detail_text_Area, addButton, cancleButton, overlay] = modalFunction(classOfDiv);
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");


            if (task_Detail_text_Area) {
                task_Detail_text_Area.select();
                task_Detail_text_Area.focus();
            }


            addButton.addEventListener('click', (e) => { //Event for submitting the detail to the Local Storage.
                e.preventDefault();

                task_text_Area = task_Detail_text_Area.value;

                if (task_text_Area === "") {
                    alert("Enter the Details here It Can not be kept Empty...");
                }

                else {  // Function to create Details Field disabled can Not put detail.
                    // const [modal, flexDiv, closeButton, detailDiv, cancleButton, overlay] = createDetailPad(task_text_Area, idOfDetail);

                    let key = idOfDetail;
                    let value = task_text_Area;

                    let detail_Block_Obj = {
                        [key]: value
                    };

                    // Check if an object with the same key already exists
                    let existingObject = detailOfTask_Array.find(obj => Object.keys(obj)[0] === key);
                    if (existingObject) {
                        // Update the existing object's value
                        existingObject[key] = value;
                    } else {
                        // Add the new object to the array
                        detailOfTask_Array.push(detail_Block_Obj);
                    }

                    // Store the updated array in local storage
                    localStorage.setItem("detailOfTask", JSON.stringify(detailOfTask_Array));

                    // Retrieve the data from local storage
                    const Detail_Block = JSON.parse(localStorage.getItem("detailOfTask"));
                    console.log(Detail_Block);

                    // modal.classList.remove("hidden");
                    // overlay.classList.remove("hidden");

                    // cancleButton.addEventListener('click', () => {
                    //     modal.remove();
                    //     overlay.remove();
                    // });

                    // closeButton.addEventListener('click', () => {
                    //     modal.remove();
                    //     overlay.remove();
                    // });

                }

                modal.remove();
                overlay.remove();
            });

            cancleButton.addEventListener('click', () => {
                modal.remove();
                overlay.remove();
            });

            closeButton.addEventListener('click', () => {
                modal.remove();
                overlay.remove();
            });

        }

        else if (box.parentNode.parentNode.id === "In-Review" || box.parentNode.parentNode.id === "In-Progress" || box.parentNode.parentNode.id === "Done") {

            let objectToFind = detailOfTask_Array.map(object => Object.entries(object)).find(entry => entry[0][0] === idOfDetail)[0][1];
            console.log(objectToFind);

            const [modal, flexDiv, closeButton, detailDiv, cancleButton, overlay] = createDetailPad(objectToFind, idOfDetail);
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");

            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");

            cancleButton.addEventListener('click', () => {
                modal.remove();
                overlay.remove();
            });

            closeButton.addEventListener('click', () => {
                modal.remove();
                overlay.remove();
            });
        }

    })
}



//Event Listner for + Sign.
add_task.addEventListener('click', () => {
    add_task.style.display = "none";
    // console.log(e.target.id);
    addTask();
});


//TODO: IIFE Design Pattern.

// Function to add the task.
function addTask(e) {

    // let id = e.target.id.toString();
    // console.log(id);
    //Function to appear Modal which returning different Elements.
    const [modal, flexDiv, closeButton, Task, addButton, cancleButton, overlay] = modalFunction();

    // modal.style.transition = '1000ms';

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    if (Task) {
        Task.select();
        Task.focus();
    }


    //Listener for Modal Add Button to add Task in Open Block.
    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let task = Task.value;

        if (task === "") {
            alert("Enter the value");
        }

        else {  // Function to create Template which will return taskTemplate with Other Elements like Radio Button and Label.
            const [taskTemplate, Inner_Task_Template, taskTemplateLabel] = createTaskTemplate(task);

            modal.style.display = "none";
            add_task.style.display = "flex";
            console.log(taskTemplateLabel.parentNode.parentNode.innerHTML);
            console.log(taskTemplateLabel.getAttribute('for'));
            console.log(taskTemplateLabel.parentNode.getAttribute('for'));

            Open(taskTemplate); //Function calling to send data to Open.js to send newly added template to Local Storage.

            modal.remove();
            overlay.remove();
        }
        location.reload();
    });

    cancleButton.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
        add_task.style.display = "block";
    });

    closeButton.addEventListener('click', () => {
        modal.remove();
        overlay.remove();
        add_task.style.display = "block";
    });
}


