export function createDetailPad(detailOfTask, idOfDetail){


    console.log(idOfDetail);
    console.log(detailOfTask);

    const detail =[];
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
        p.textContent = `Detail Related to Your Task.     Added To: ${new Date(parseInt(idOfDetail))}`;
        

        textDiv.appendChild(h3);
        textDiv.appendChild(p);

        const detailDiv = document.createElement('div');
        detailDiv.padding = '10px';
        detailDiv.innerHTML = detailOfTask;
        detailDiv.style.color = "black";
        detailDiv.style.fontSize = "x-large";
    

        const cancleButton = document.createElement("button");
        cancleButton.classList.add("btn");
        cancleButton.textContent = "close";

        modal.appendChild(flexDiv);
        modal.appendChild(textDiv);
        modal.appendChild(detailDiv);
        modal.appendChild(cancleButton);

        const overlay = document.createElement("div");
        overlay.classList.add("overlay", "hidden");

        detail.push(modal, flexDiv, closeButton, detailDiv, cancleButton, overlay);

        document.body.appendChild(modal);
        document.body.appendChild(overlay);

        return detail;
}