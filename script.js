const btn = document.querySelector("#btn");
btn.style.display = "flex";
btn.style.margin = "0 auto";
btn.style.marginBottom = "10px";
btn.addEventListener("click", resetGrid);

// clears the current grid to allow for user input sized grid
function resetGrid() {
    let number = prompt("How many squares per side for your new grid? (1-100)");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(number);
}

function createGrid(size) {
    const container = document.querySelector("#container");

    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.width = "960px";
    container.style.margin = "0 auto";

    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = "#f0f0f0";
        div.style.padding = "0"; 
        div.style.border = "1px solid #ccc"; 
        div.style.width = `${960 / size}` + "px";
        div.style.height = `${960 / size}` + "px";
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.boxSizing = "border-box";
        
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = "black";
        });

        div.addEventListener("mouseout", function() {
            div.style.backgroundColor = "#f0f0f0";
        });

        container.appendChild(div);
    }
}

createGrid(16);

