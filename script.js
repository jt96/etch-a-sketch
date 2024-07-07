const container = document.querySelector("#container");

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "256px";
container.style.margin = "0 auto";

for (let i = 1; i <= 256; i++) {
    const div = document.createElement("div");
        div.style.backgroundColor = "#f0f0f0";
        div.style.margin = "1px"; 
        div.style.padding = "0"; 
        div.style.border = "1px solid #ccc"; 
        div.style.width = "14px"; 
        div.style.height = "14px"; 
        div.style.display = "flex";
        div.style.alignItems = "center";
        div.style.justifyContent = "center";
        div.style.boxSizing = "border-box";

        container.appendChild(div);
}