import { inProgress_Block_Array, inReview_Block_Array, Open_Block_Array, Done_Block_Array} from "./index.js";
export default function localStorageUpdation(itemId, ContainerId, draggableTodo) {

    console.log(itemId);
    console.log(ContainerId);


    if (itemId === "Open") { //TODO:Open to Other

        if (ContainerId === "In-Progress") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InProgress_Block_Obj = {
                [key]: value
            };

            inProgress_Block_Array.push(InProgress_Block_Obj);
            console.log(inProgress_Block_Array);
            localStorage.setItem("InProgress", JSON.stringify(inProgress_Block_Array));

            let filteredArray = Open_Block_Array.filter(obj1 =>
                !inProgress_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("Open", JSON.stringify(filteredArray));
        }

        else if (ContainerId === "In-Review") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InReview_Block_Obj = {
                [key]: value
            };

            inReview_Block_Array.push(InReview_Block_Obj);
            console.log(inReview_Block_Array);
            localStorage.setItem("InReview", JSON.stringify(inReview_Block_Array));

            let filteredArray = Open_Block_Array.filter(obj1 =>
                !inReview_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("Open", JSON.stringify(filteredArray));

        }

        else if (ContainerId === "Done") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let Done_Block_Obj = {
                [key]: value
            };

            Done_Block_Array.push(Done_Block_Obj);
            console.log(Done_Block_Array);
            localStorage.setItem("Done", JSON.stringify(Done_Block_Array));

            let filteredArray = Open_Block_Array.filter(obj1 =>
                !Done_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("Open", JSON.stringify(filteredArray));

        }
    }


    else if (itemId === "In-Progress") {  //TODO:  In Progress to Other.

        if (ContainerId === "In-Review") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InReview_Block_Obj = {
                [key]: value
            };

            inReview_Block_Array.push(InReview_Block_Obj);
            console.log(inReview_Block_Array);
            localStorage.setItem("InReview", JSON.stringify(inReview_Block_Array));

            let filteredArray = inProgress_Block_Array.filter(obj1 =>
                !inReview_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("InProgress", JSON.stringify(filteredArray));

        }

        else if (ContainerId === "Done") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let Done_Block_Obj = {
                [key]: value
            };

            Done_Block_Array.push(Done_Block_Obj);
            console.log(Done_Block_Array);
            localStorage.setItem("Done", JSON.stringify(Done_Block_Array));

            let filteredArray = inProgress_Block_Array.filter(obj1 =>
                !Done_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("InProgress", JSON.stringify(filteredArray));

        }
    }


    else if (itemId === "In-Review") {    //TODO:   In Review to Other.

        if (ContainerId === "In-Progress") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InProgress_Block_Obj = {
                [key]: value
            };

            inProgress_Block_Array.push(InProgress_Block_Obj);
            console.log(inProgress_Block_Array);
            localStorage.setItem("InProgress", JSON.stringify(inProgress_Block_Array));

            let filteredArray = inReview_Block_Array.filter(obj1 =>
                !inProgress_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("InReview", JSON.stringify(filteredArray));
        }


        else if (ContainerId === "Done") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let Done_Block_Obj = {
                [key]: value
            };

            Done_Block_Array.push(Done_Block_Obj);
            console.log(Done_Block_Array);
            localStorage.setItem("Done", JSON.stringify(Done_Block_Array));

            let filteredArray = inReview_Block_Array.filter(obj1 =>
                !Done_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("InReview", JSON.stringify(filteredArray));

        }
    }


    else if (itemId === "Done") { //TODO: Done to Other

        if (ContainerId === "In-Progress") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InProgress_Block_Obj = {
                [key]: value
            };

            inProgress_Block_Array.push(InProgress_Block_Obj);
            console.log(inProgress_Block_Array);
            localStorage.setItem("InProgress", JSON.stringify(inProgress_Block_Array));

            let filteredArray = Done_Block_Array.filter(obj1 =>
                !inProgress_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("Done", JSON.stringify(filteredArray));
        }

        else if (ContainerId === "In-Review") {

            let key = draggableTodo.firstElementChild.getAttribute('key');
            let value = draggableTodo.innerHTML;

            console.log(key);
            let InReview_Block_Obj = {
                [key]: value
            };

            inReview_Block_Array.push(InReview_Block_Obj);
            console.log(inReview_Block_Array);
            localStorage.setItem("InReview", JSON.stringify(inReview_Block_Array));

            let filteredArray = Done_Block_Array.filter(obj1 =>
                !inReview_Block_Array.some(obj2 => Object.keys(obj1)[0] === Object.keys(obj2)[0])
            );

            localStorage.setItem("Done", JSON.stringify(filteredArray));

        }
    }




}