const btn = document.querySelector("#btn");
btn.style.display = "flex";
btn.style.margin = "0 auto";
btn.style.marginBottom = "10px";
btn.addEventListener("click", resetGrid);

// clears the current grid to allow for user input sized grid
function resetGrid() {
    let number = prompt("How many squares per side for your new grid? (1-100)");
    if (number > 100) {
        number = 100;
    } else if (number < 1) {
        number = 1;
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(number);
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // random value for red (0-255)
    const g = Math.floor(Math.random() * 256); // random value for green (0-255)
    const b = Math.floor(Math.random() * 256); // random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;
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
        div.style.opacity = "0.25";
        
        div.addEventListener("mouseover", function() {
            div.style.backgroundColor = getRandomColor();
        });

        div.addEventListener("mouseout", function() {
            div.style.backgroundColor = "black";
            let currentOpacity = parseFloat(div.style.opacity);
            div.style.opacity = currentOpacity + 0.25 <= 1 ? currentOpacity + 0.1 : 1;
        });

        container.appendChild(div);
    }
}

createGrid(16);

