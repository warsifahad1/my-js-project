const projects = [
    "project-1.html",
    "project_2.html",
    "project-3.html",
    "project-4.html",
    "project-5.html",
    "project-6.html",
    "project-7.html"
]; // array

let currentIndex = 0;
const container = document.getElementById("projectContainer");
let timeInterval;

function loadProject(index) {
    fetch(projects[index])
        .then(res => res.text())
        .then(data => {
            container.innerHTML = data;

            clearInterval(timeInterval); // 🔥 very important

            switch (projects[index]) {
                case "project-1.html":
                    // Project 1 works already
                    break;

                case "project_2.html":
                    startDateTime();
                    break;

                case "project-3.html":
                    initProject3();
                    break;

                case "project-4.html":
                    initProject4();
                    break;

                case "project-5.html":
                    initProject5();
                    break;

                case "project-6.html":
                    initProject6();
                    break;

                case "project-7.html":
                    initProject7();
                    break;

            }
        });
}

// buttons
document.getElementById("next").onclick = () => {
    if (currentIndex < projects.length - 1) {
        currentIndex++;
        loadProject(currentIndex);
    }
};

document.getElementById("prev").onclick = () => {
    if (currentIndex > 0) {
        currentIndex--;
        loadProject(currentIndex);
    }
};

// First load
loadProject(currentIndex);

//Project 1
let count = 0;
function decrease() {
    if (count > 0) {
        count--;
    }
    document.getElementById("count").innerText = count;
}
function increase() {
    if (count < 100) {
        count++;
    }
    document.getElementById("count").innerText = count
}
function reset() {
    count = 0;
    document.getElementById("count").innerText = count
}

// project-2 
function startDateTime() {
    function updateTime() {
        const el = document.getElementById("current-time");
        if (el) {
            el.textContent = new Date().toLocaleString();
        }
    }

    updateTime();
    timeInterval = setInterval(updateTime, 1000);
}


// project 3
function initProject3() {
    const boxes = document.querySelectorAll(".box");
    const body = document.getElementById("body");

    boxes.forEach(box => {
        box.addEventListener("click", e => {
            const color = e.target.id;
            if (color === "white") {
                body.style.color = "#212121";
            } else {
                body.style.color = "white";
            }
            document.body.style.backgroundColor = e.target.id;
        });
    });
}

//project 4
function initProject4() {
    const menuBtn = document.getElementById("menuBtn");
    const gridBox = document.querySelector(".grid-box");
    const cross = document.getElementById("close");

    menuBtn.addEventListener('click', () => {
        gridBox.style.display = "block";
    });

    cross.addEventListener('click', () => {
        gridBox.style.display = "none";
    });
};
//project 5
function initProject5() {
    const display = document.querySelector("[name=display]");

    // 1. In functions ko global (window) banana zaroori hai 
    // taaki HTML ke onclick="" inko call kar sakein.

    window.appendValue = function (value) {
        if (display) {
            // Agar pehle se 0 hai to use hata kar naya value dalein
            if (display.value === "0") {
                display.value = value;
            } else {
                display.value += value;
            }
        }
    };

    window.allClear = function () {
         display.value = "0";
    };

    window.clearChar = function () {
        if (display) {
            display.value = display.value.slice(0, -1);
            if (display.value === "") display.value = "0";
        }
    };

    window.calculate = function () {
        try {
            if (display) {
                // eval ka istemal dhyan se karein
                display.value = eval(display.value);
            }
        } catch (e) {
            display.value = "error";
        }
    };
}

//project 6
function initProject6(){
    const listItem = document.querySelectorAll(".list-item");

    listItem.forEach((listItem) => {
        listItem.addEventListener('click', () => {
            listItem.classList.toggle("done");
        });
    });
}

//project 7
function initProject7(){
    const taskInput = document.getElementById("taskInput");
        const addBtn = document.getElementById("addBtn");
        const list = document.getElementById("list");

        addBtn.addEventListener("click", () => {
            if (taskInput.value === "") {
                alert("Please enter a task");
                return;
            }

            // create li
            const li = document.createElement("li");
            li.innerText = taskInput.value;

            // toggle done
            li.addEventListener("click", () => {
                li.classList.toggle("done");
            });

            // add li to ul
            list.appendChild(li);

            // clear input
            taskInput.value = "";
        });
}