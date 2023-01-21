export default function createTaskTemplate(task){

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let keyForParent = `${day}-${month}-${year}-${date.toLocaleTimeString()}`;

    const Task_Template_Items = [];
    const taskTemplate = document.createElement('div');
    const Inner_Task_Template = document.createElement('div');
    const taskTemplateLabel = document.createElement('label');
    const edit = document.createElement('i');
    // const taskTemplateRadio = document.createElement('input');

     /*this key is used to set the "attribute" to the taskTemplate and RadioButton
     This key is different from the key which is used in TaskTemplate.js
     to get the same key template on click on radion button and push to the Done Block.*/
     let key = Date.now();

    taskTemplate.className = "template-div";
    taskTemplate.setAttribute('for',keyForParent);
    // taskTemplate.draggable = "true";
    Inner_Task_Template.classList = "template-div-child template-div-Open";
    Inner_Task_Template.draggable = "true";
    // Inner_Task_Template.className = "template-div-child";
    taskTemplateLabel.className = "label";
    edit.classList = "fa-solid fa-pen-to-square";

    // taskTemplateRadio.className = "radio";

    // taskTemplateRadio.setAttribute("type", "checkbox");
    // taskTemplateRadio.setAttribute("key", key);
    // taskTemplate.setAttribute("name","input");
    Inner_Task_Template.setAttribute("key",keyForParent);
    Inner_Task_Template.setAttribute("for",key);
    taskTemplateLabel.setAttribute("for", key);

    Inner_Task_Template.appendChild(taskTemplateLabel);
    Inner_Task_Template.appendChild(edit);
    // Inner_Task_Template.appendChild(taskTemplateRadio);

    taskTemplate.appendChild(Inner_Task_Template);
    
    Open.appendChild(taskTemplate);

    taskTemplateLabel.innerHTML = task;

    Task_Template_Items.push(taskTemplate, Inner_Task_Template, taskTemplateLabel);

    return Task_Template_Items;
}