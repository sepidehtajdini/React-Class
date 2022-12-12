const names = ["Sarah", "James", "Teylor", "Bob", "Alice", "David"];

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
function rand() {
    return Math.floor(Math.random() * names.length-1);
}
class orb {
    radius = 0;
    x = 0;
    y = 0;

    constructor(radius, name) {
        this.radius = radius;
        this.name = name;
        this.x = Math.random() * 1000;
        this.y = Math.random() * 500;
        this.make();
    }
    make() {
        const main = document.querySelector(".main");
        const circle = document.createElement("div");
        circle.setAttribute("class", "circle");

        circle.style.width = this.radius + "px";
        circle.style.height = this.radius + "px";
        circle.style.top = this.y + "px";
        circle.style.left = this.x + "px";
        circle.innerText = this.name;
        main.appendChild(circle);

        setTimeout(function () {
            for (let i = 0; i < names.length-1; i++) {
            const randomCaseIndex = rand(names[i]);
       
            // circle.style.display = "none";
            main.removeChild(circle);

        }
        }, 1000);
}
}

for (let i = 0; i < names.length; i++) {
    new orb(50, names[i]);
}
