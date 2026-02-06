// Game Variables
let currentTurn = 'red'; 
let rooms = {};

// Room Banane ka Function
function createRoom() {
    let id = document.getElementById('roomId').value;
    if(id === "") {
        alert("Pehle koi Room Code likhein!");
    } else {
        document.getElementById('status').innerHTML = "Status: Connected to Room " + id;
        document.getElementById('status').style.color = "#2ed573";
        alert("Room " + id + " tayyar hai!");
    }
}

// Gitta (Dice) aur Turn Cursor Logic
function roll() {
    let result = document.getElementById('result');
    let board = document.getElementById('ludo-board');
    
    let number = Math.floor(Math.random() * 6) + 1;
    result.innerHTML = "🎲 " + number;

    // Cursor Movement: Agli bari kis ki hai?
    changeTurn(board);
}

function changeTurn(board) {
    const turns = ['red', 'green', 'yellow', 'blue'];
    let nextIndex = (turns.indexOf(currentTurn) + 1) % 4;
    currentTurn = turns[nextIndex];
    
    // Board ka border badal kar "Cursor" dikhana
    board.style.borderColor = getHexColor(currentTurn);
    console.log("Ab bari hai: " + currentTurn);
}

function getHexColor(player) {
    const colors = { red: '#ff4757', green: '#2ed573', yellow: '#ffa502', blue: '#1e90ff' };
    return colors[player];
}
