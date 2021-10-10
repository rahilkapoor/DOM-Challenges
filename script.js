const palette_colors = ["#FF1744", "#D500F9", "#3D5AFE", "#00E676", "#FFFF00", "#FF6D00", "#78909C", "#3E2723", "#212121", "#E91E63"];

const palette = document.getElementById("palette");
const cols = 30;
const rows = 30;
const grid = document.getElementById("grid");
let selected_color;

for (let i = 0; i < palette_colors.length; i++) {
    let div = document.createElement("div");

    div.classList += "palette_colors";
    div.style = `background:${palette_colors[i]}`;
    div.id = `${i}`;

    palette.appendChild(div);
};

document.querySelector("#palette").addEventListener('click', (e) => {
    let color_idx = e.target.id;
    let color = palette_colors[color_idx];

    selected_color = color;
});

for (let i = 0; i < cols; i++) {
    let gridCol = document.createElement("gridCol");
    for (let j = 0; j < rows; j++) {
        let box = document.createElement("box");
        box.classList = "box";
        box.id = `"${i}${j}"`
        gridCol.appendChild(box);
    }
    gridCol.classList = "gridCol";

    grid.appendChild(gridCol);
};

grid.addEventListener("mousedown", (e) => {
    if (!!selected_color == false)
        console.log("No Color Selected!");
    else {
        let bid = e.target.id;
        let box = document.getElementById(bid);
        box.style = `background: ${selected_color}`;

        grid.addEventListener("mouseover", (e) => {
            let bid = e.target.id;
            let box = document.getElementById(bid);
            if (e.buttons == 1 || e.buttons == 3)
                box.style = `background: ${selected_color}`;
        });
    }
});