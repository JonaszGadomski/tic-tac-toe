const squares = document.querySelectorAll('.square');
const test = document.getElementById('test');
const test2 = document.getElementById('test2');
const x = '<div class="box" id="x"><div class="x x1"></div><div class="x x2"></div></div>';
const circle = '<div class="box" id="circle"><div class="circle"></div></div>';
const deletion = document.getElementById('deletion');










let full = 0;
const emptyCells = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

squares.forEach(cell => {
    cell.addEventListener('click',  () => {
        playerMark(cell);
        checkForWin();
    })
})

function playerMark(cell) {
    cell.innerHTML = x;
    full ++;
    var c = cell.id;
    var d = emptyCells.indexOf(c);
    if (d >=0) {
        emptyCells.splice(d, 1);
        test2.innerHTML = emptyCells;
        computerMark();
    }
    else return
}
//funckcja computerMark odejmuje elementy z emptyCells dopiero po ruchu człowieka
function computerMark() {
    var e = emptyCells.length;
    var f = emptyCells[Math.floor(Math.random() * e)];
    squares[f].innerHTML = circle;
    var g = squares[f].id;
    var h = emptyCells.indexOf(g);
    if (h >=0) {
        emptyCells.splice(g,1);
    }
    else return
    full ++;


}








function checkForWin() {
    if (squares[0].innerHTML == x && squares[1].innerHTML == x && squares[2].innerHTML == x ||
        squares[0].innerHTML == circle && squares[1].innerHTML == circle && squares[2].innerHTML == circle) {
        test.innerHTML = test.innerHTML + "win"
        deletion.style.rotate = "90deg";
        deletion.style.top = "-151px";
        deletion.style.visibility = "visible";
    }
    else if (squares[3].innerHTML == x && squares[4].innerHTML == x && squares[5].innerHTML == x ||
        squares[3].innerHTML == circle && squares[4].innerHTML == circle && squares[5].innerHTML == circle) {
        test.innerHTML = "win";
        deletion.style.rotate = "90deg";
        deletion.style.visibility = "visible";
    }
    else if (squares[6].innerHTML == x && squares[7].innerHTML == x && squares[8].innerHTML == x ||
        squares[6].innerHTML == circle && squares[7].innerHTML == circle && squares[8].innerHTML == circle) {
        test.innerHTML = "win"
        deletion.style.rotate = "90deg";
        deletion.style.top = "151px"
        deletion.style.visibility = "visible";
    }
    else if (squares[0].innerHTML == x && squares[3].innerHTML == x && squares[6].innerHTML == x ||
        squares[0].innerHTML == circle && squares[3].innerHTML == circle && squares[6].innerHTML == circle) {
        test.innerHTML = "win";
        deletion.style.left = "70px";
        deletion.style.visibility = "visible";
    }
    else if (squares[1].innerHTML == x && squares[4].innerHTML == x && squares[7].innerHTML == x ||
        squares[1].innerHTML == circle && squares[4].innerHTML == circle && squares[7].innerHTML == circle) {
        test.innerHTML = "win"
        deletion.style.left = "222px";
        deletion.style.visibility = "visible";
    }
    else if (squares[2].innerHTML == x && squares[5].innerHTML == x && squares[8].innerHTML == x ||
        squares[2].innerHTML == circle && squares[5].innerHTML == circle && squares[8].innerHTML == circle) {
        test.innerHTML = "win"
        deletion.style.left = "374px";
        deletion.style.visibility = "visible";
    }
    else if (squares[0].innerHTML == x && squares[4].innerHTML == x && squares[8].innerHTML == x ||
        squares[0].innerHTML == circle && squares[4].innerHTML == circle && squares[8].innerHTML == circle) {
        test.innerHTML = "win"
        deletion.style.rotate = "-45deg";
        deletion.style.visibility = "visible";
    }
    else if (squares[2].innerHTML == x && squares[4].innerHTML == x && squares[6].innerHTML == x ||
        squares[2].innerHTML == circle && squares[4].innerHTML == circle && squares[6].innerHTML == circle) {
        test.innerHTML = "win"
        deletion.style.rotate = "45deg";
        deletion.style.visibility = "visible";
    }

}