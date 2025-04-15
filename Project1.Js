let boxes = document.querySelectorAll(".Box");
let reset = document.querySelector("#Reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((Box) => {
    Box.addEventListener("click",() => {
        if(turnO) {
            Box.innerText = "O";
            turnO = false;
        } else {
            Box.innerText = "X";
            turnO = true;
        }
        Box.disabled = true;

        checkWinner();
    });
});

const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};



const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for( let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        //     );
            let pos1Val =  boxes[pattern[0]].innerText;
            let pos2Val =  boxes[pattern[1]].innerText;
            let pos3Val =  boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
                }
            }
    }
};

newBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

