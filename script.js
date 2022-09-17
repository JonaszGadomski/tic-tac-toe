const squares = document.querySelectorAll('#square');
const test = document.getElementById('test');
const x = '<div class="box" id="x"><div class="x x1"></div><div class="x x2"></div></div>';
const circle = '<div class="box" id="circle"><div class="circle"></div></div>';


function zmiana(cell) {
    cell.innerHTML = x
}

function checkForWin() {
    if (squares[0].innerHTML == x && squares[1].innerHTML == x && squares[2].innerHTML == x ||
        squares[0].innerHTML == circle && squares[1].innerHTML == circle && squares[2].innerHTML == circle) {
        test.innerHTML = "win"
    }
    else if (squares[3].innerHTML == x && squares[4].innerHTML == x && squares[5].innerHTML == x ||
        squares[3].innerHTML == circle && squares[4].innerHTML == circle && squares[5].innerHTML == circle) {
        test.innerHTML = "win"
    }
    else if (squares[4].innerHTML == x && squares[7].innerHTML == x && squares[8].innerHTML == x ||
        squares[4].innerHTML == circle && squares[7].innerHTML == circle && squares[8].innerHTML == circle) {
        test.innerHTML = "win"
    }
    else if (squares[0].innerHTML == x && squares[3].innerHTML == x && squares[6].innerHTML == x ||
        squares[0].innerHTML == circle && squares[3].innerHTML == circle && squares[6].innerHTML == circle) {
        test.innerHTML = "win"
    }
    else if (squares[1].innerHTML == x && squares[4].innerHTML == x && squares[7].innerHTML == x ||
        squares[1].innerHTML == circle && squares[4].innerHTML == circle && squares[7].innerHTML == circle) {
        test.innerHTML = "win"
    }
    else if (squares[2].innerHTML == x && squares[5].innerHTML == x && squares[8].innerHTML == x ||
        squares[2].innerHTML == circle && squares[5].innerHTML == circle && squares[8].innerHTML == circle) {
        test.innerHTML = "win"
    }

}

squares.forEach(cell => {
    cell.addEventListener('click', () => {
        zmiana(cell)
        checkForWin()
    })
})

