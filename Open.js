import { Open_Block_Array } from "./index.js";
export function Open(taskTemplate) {  //Function Defination Where newly added template is passed in parameters which is adding to Local Storage.

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    /* this key is used to set key for object for LocalStorage.Weather that
     key is used to set the "attribute" to the taskTemplate and RadioButton
     This key is different from the key which is used in TaskTemplate.js
     to get the same key template on click on radion button and push to the Done Block.*/
    
    let key = `${day}-${month}-${year}-${date.toLocaleTimeString()}`;
    let value = taskTemplate.innerHTML;

    let Open_Block_Obj = {
        [key] : value
    };


    Open_Block_Array.push(Open_Block_Obj);

    localStorage.setItem("Open", JSON.stringify(Open_Block_Array));

    const Open_Block = JSON.parse(localStorage.getItem("Open"));
    console.log(Open_Block);



    //TODO: Get data from Local Storage on Page Load.
}