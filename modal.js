export default function modalFunction(displayModalFor) {
    // console.log("Working");  // To check func is working properly.

    const modalContent = [];

    // console.log(displayModalFor);

    if (!displayModalFor) {

        const modal = document.createElement("section");
        modal.classList.add("modal", "hidden");

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex");

        const closeButton = document.createElement("button");
        closeButton.classList.add("btn-close");
        closeButton.textContent = "⨉";

        flexDiv.appendChild(closeButton);

        const textDiv = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.className = "modal-heading";
        h3.textContent = "BusyBee Task";

        const p = document.createElement("p");
        p.textContent = "Write Your Task Here.";

        textDiv.appendChild(h3);
        textDiv.appendChild(p);

        const Task = document.createElement("input");
        Task.type = "text";
        Task.id = "email";
        Task.placeholder = "Task";
        Task.maxLength = 30;

        const addButton = document.createElement("button");
        addButton.classList.add("btn");
        addButton.textContent = "Add";

        const cancleButton = document.createElement("button");
        cancleButton.classList.add("btn");
        cancleButton.textContent = "cancle";

        modal.appendChild(flexDiv);
        modal.appendChild(textDiv);
        modal.appendChild(Task);
        modal.appendChild(addButton);
        modal.appendChild(cancleButton);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay", "hidden");

        modalContent.push(modal, flexDiv, closeButton, Task, addButton, cancleButton, overlay);

        document.body.appendChild(modal);
        document.body.appendChild(overlay);

        return modalContent;

    }


    else {
        const modal = document.createElement("section");
        modal.classList.add("modal", "hidden");

        const flexDiv = document.createElement("div");
        flexDiv.classList.add("flex");

        const closeButton = document.createElement("button");
        closeButton.classList.add("btn-close");
        closeButton.textContent = "⨉";

        flexDiv.appendChild(closeButton);

        const textDiv = document.createElement("div");

        const h3 = document.createElement("h3");
        h3.textContent = "Hey BusyBee";

        const p = document.createElement("p");
        p.textContent = "Write Your Details Here.";

        textDiv.appendChild(h3);
        textDiv.appendChild(p);

        const task_Detail_text_Area = document.createElement('textarea');
        task_Detail_text_Area.padding = '10px';
        task_Detail_text_Area.cols = 40;
        task_Detail_text_Area.rows = 5;
        task_Detail_text_Area.placeholder = 'Enter your text here...';
        task_Detail_text_Area.maxLength = 100;
        task_Detail_text_Area.autofocus = true;

        const addButton = document.createElement("button");
        addButton.classList.add("btn");
        addButton.textContent = "Add";

        const cancleButton = document.createElement("button");
        cancleButton.classList.add("btn");
        cancleButton.textContent = "cancle";

        modal.appendChild(flexDiv);
        modal.appendChild(textDiv);
        modal.appendChild(task_Detail_text_Area);
        modal.appendChild(addButton);
        modal.appendChild(cancleButton);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay", "hidden");

        modalContent.push(modal, flexDiv, closeButton, task_Detail_text_Area, addButton, cancleButton, overlay);

        document.body.appendChild(modal);
        document.body.appendChild(overlay);

        return modalContent;
    }
}