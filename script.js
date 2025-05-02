let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#rst-btn');
let playagainbtn = document.querySelector('#play-again');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let turn0 = true;

let winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Fixed property name
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Fixed property name
        box.innerHTML = "";
        box.style.backgroundColor = ""; // Reset background color
    }
};

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`; // Fixed method name
    msgcontainer.classList.remove('hide');
    disableboxes();
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerHTML === "") { // Prevent overwriting a box
            if (turn0 === true) {
                box.innerHTML = "0";
                turn0 = false;
            } else {
                box.innerHTML = "X";
                turn0 = true;
            }
            box.disabled = true; // Disable the clicked box
            checkwinner();
        }
    });
});

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";
                showwinner(val1);
                return;
            }
        }
    }
};

const resetgame = () => {
    turn0 = true;
    enableboxes();
    msgcontainer.classList.add('hide');
};

playagainbtn.addEventListener('click', resetgame);
resetbtn.addEventListener('click', resetgame);