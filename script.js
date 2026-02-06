// 1. Guest Play (Offline) Mode
function startGuest() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('result').innerHTML = "Mode: Guest Play";
}

// 2. Room Menu dikhane ke liye
function showRoomBox() {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('room-box').style.display = 'block';
}

// 3. Wapas Menu par jaane ke liye
function backToMenu() {
    document.getElementById('room-box').style.display = 'none';
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';
}

// 4. Room Join karne ke baad game shuru karna
function createRoom() {
    let id = document.getElementById('roomId').value;
    if(id === "") {
        alert("Pehle koi Room Code likhein!");
    } else {
        document.getElementById('room-box').style.display = 'none';
        document.getElementById('game-area').style.display = 'block';
        document.getElementById('result').innerHTML = "Status: Connected to Room " + id;
    }
    // script.js ki aakhri line ke niche ye copy-paste karein
function openClub() {
    let clubName = prompt("Club ka naam likhein:");
    if(clubName) {
        document.getElementById('status').innerHTML = "Status: Joined Club " + clubName;
        alert(clubName + " ke Audio Room mein aapka swagat hai! (Mic Connecting...)");
    }
}
    
}

// 5. Gitta (Dice) Roll karna
function roll() {
    let n = Math.floor(Math.random() * 6) + 1;
    document.getElementById('result').innerHTML = "🎲 Number: " + n;
}
