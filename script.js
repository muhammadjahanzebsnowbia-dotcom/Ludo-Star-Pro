// Level system shuru mein 1 hoga
let userLevel = 1; 

// Level check karne wala function
function openClub() {
    if (userLevel < 10) {
        alert("🔒 Yeh feature Level 10 par unlock hoga! Abhi aapka level " + userLevel + " hai.");
    } 
    else if (userLevel >= 10 && userLevel < 15) {
        alert("🎙️ Level 10 ka Audio Room Open! (Lekin 15 Level wala Mic abhi lock hai)");
        // Yahan Level 10 wala audio logic aayega
    }
    else if (userLevel >= 15) {
        alert("👑 Mubarak ho! Level 15 Unlock! Ab aap Pro Mic aur saare Audio Rooms use kar sakte hain.");
        // Yahan Level 15 ka advanced audio logic aayega
    }
}

// Level badhane ke liye (misal ke taur par har roll par experience milega)
function increaseLevel() {
    userLevel++;
    console.log("Aapka naya level: " + userLevel);
}

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
let userLevel = 1;
let coins = 5000;

// Club button dabane par Gifting aur Audio dono khulenge
function openClub() {
    document.getElementById('gift-panel').style.display = 'block';
    document.getElementById('audio-room').style.display = 'block';
    
    setupMics(); // Mics load karne ke liye
}

function setupMics() {
    let micContainer = document.getElementById('mic-container');
    micContainer.innerHTML = ""; 

    // Level 1-10 tak 5 mics, Level 11+ par 10 mics
    let totalMics = (userLevel >= 11) ? 10 : 5;

    for (let i = 1; i <= 10; i++) {
        let isUnlocked = (i <= totalMics);
        let micBtn = document.createElement("button");
        micBtn.innerHTML = (isUnlocked ? "🎙️" : "🔒") + "<br>Mic " + i;
        micBtn.style.background = isUnlocked ? "#2ed573" : "#444";
        micBtn.style.color = "white";
        micBtn.style.margin = "3px";
        micBtn.style.padding = "5px";
        micBtn.style.borderRadius = "5px";

        micBtn.onclick = function() {
            if (isUnlocked) alert("Mic " + i + " Active!");
            else alert("🔒 Level 11 par unlock hoga!");
        };
        micContainer.appendChild(micBtn);
    }
}

function sendGift(gift, cost) {
    if (coins >= cost) {
        coins -= cost;
        document.getElementById('user-coins').innerHTML = "Coins: " + coins;
        alert(gift + " Gift bhej diya!");
    } else {
        alert("Coins kam hain!");
    }
}

