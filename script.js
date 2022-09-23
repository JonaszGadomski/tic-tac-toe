const squares = document.querySelectorAll('.square');
const test = document.getElementById('test');
const test2 = document.getElementById('test2');
const x = '<div class="box" id="x"><div class="x x1"></div><div class="x x2"></div></div>';
const circle = '<div class="box" id="circle"><div class="circle"></div></div>';
const deletion = document.getElementById('deletion');

let full = 0;
let xNumber = 0;
let circleNumber = 0;

const emptyCells = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

squares.forEach(cell => {
    cell.addEventListener('click',  () => {
        playerMark(cell);
    })
})

function playerMark(cell) {
    if (cell.innerHTML != circle && deletion.style.visibility != "visible") {
        cell.innerHTML = x;
        xNumber ++;
        checkForWin();
        var c = cell.id;
        var d = emptyCells.indexOf(c);
        if (d >=0 && deletion.style.visibility != "visible") {
            emptyCells.splice(d, 1);
            setTimeout(computerMark, 150);
        }
        else return
    }
}

function computerMark() {
    var e = emptyCells.length;
    var f = emptyCells[Math.floor(Math.random() * e)];
    squares[f].innerHTML = circle;
    var g = squares[f].id;
    var h = emptyCells.indexOf(g);
    emptyCells.splice(h,1);
    circleNumber ++;
    checkForWin();
}

function win() {
    deletion.style.visibility = "visible";
    if (xNumber > circleNumber) {
        test.innerHTML = test.innerHTML + "X win the game";
    }
    else {
        test.innerHTML = test.innerHTML + "Circle win the game";
    }
}


function checkForWin() {
    if (squares[0].innerHTML == x && squares[1].innerHTML == x && squares[2].innerHTML == x ||
        squares[0].innerHTML == circle && squares[1].innerHTML == circle && squares[2].innerHTML == circle) {
        win(); 
        deletion.style.rotate = "90deg";
        deletion.style.top = "-151px";
    }
    else if (squares[3].innerHTML == x && squares[4].innerHTML == x && squares[5].innerHTML == x ||
        squares[3].innerHTML == circle && squares[4].innerHTML == circle && squares[5].innerHTML == circle) {
         win(); 
        deletion.style.rotate = "90deg";
    }
    else if (squares[6].innerHTML == x && squares[7].innerHTML == x && squares[8].innerHTML == x ||
        squares[6].innerHTML == circle && squares[7].innerHTML == circle && squares[8].innerHTML == circle) {
        win(); 
        deletion.style.rotate = "90deg";
        deletion.style.top = "151px"
    }
    else if (squares[0].innerHTML == x && squares[3].innerHTML == x && squares[6].innerHTML == x ||
        squares[0].innerHTML == circle && squares[3].innerHTML == circle && squares[6].innerHTML == circle) {
        win(); 
        deletion.style.left = "70px";
    }
    else if (squares[1].innerHTML == x && squares[4].innerHTML == x && squares[7].innerHTML == x ||
        squares[1].innerHTML == circle && squares[4].innerHTML == circle && squares[7].innerHTML == circle) {
        win(); 
        deletion.style.left = "222px";
    }
    else if (squares[2].innerHTML == x && squares[5].innerHTML == x && squares[8].innerHTML == x ||
        squares[2].innerHTML == circle && squares[5].innerHTML == circle && squares[8].innerHTML == circle) {
        win(); 
        deletion.style.left = "374px";
    }
    else if (squares[0].innerHTML == x && squares[4].innerHTML == x && squares[8].innerHTML == x ||
        squares[0].innerHTML == circle && squares[4].innerHTML == circle && squares[8].innerHTML == circle) {
        win(); 
        deletion.style.rotate = "-45deg";
    }
    else if (squares[2].innerHTML == x && squares[4].innerHTML == x && squares[6].innerHTML == x ||
        squares[2].innerHTML == circle && squares[4].innerHTML == circle && squares[6].innerHTML == circle) {
        win(); 
        deletion.style.rotate = "45deg";
    }
    else if (deletion.style.visibility != "visible" && xNumber == 5) {
        test.innerHTML = test.innerHTML + "It is a DRAW!";
    }
}