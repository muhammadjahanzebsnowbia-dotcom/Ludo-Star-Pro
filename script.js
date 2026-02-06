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

// script.js ki sabse aakhri line ke niche ye add karein

// 1. Coins Purchase Function
function showStore() {
    let confirmBuy = confirm("Kya aap 5000 Coins purchase karna chahte hain?");
    if(confirmBuy) {
        coins += 5000;
        alert("Purchase Successful! Naya Balance: " + coins);
        if(document.getElementById('user-coins')) {
            document.getElementById('user-coins').innerHTML = "Coins: " + coins;
        }
    }
}

// 2. Mic Locking Logic (Level 1 = 5 Mics, Level 11 = 10 Mics)
function openClub() {
    document.getElementById('audio-room').style.display = 'block';
    let container = document.getElementById('mic-container');
    container.innerHTML = ""; 

    let totalMics = (userLevel >= 11) ? 10 : 5;

    for (let i = 1; i <= 10; i++) {
        let isUnlocked = (i <= totalMics);
        let btn = document.createElement("button");
        btn.innerHTML = (isUnlocked ? "🎙️" : "🔒") + "<br>Mic " + i;
        btn.style.background = isUnlocked ? "#2ecc71" : "#444";
        btn.style.color = "white";
        btn.style.padding = "8px";
        btn.style.borderRadius = "8px";
        btn.style.border = "1px solid #777";

        btn.onclick = function() {
            if(isUnlocked) alert("Mic " + i + " Connected! Aap baat kar sakte hain.");
            else alert("🔒 Yeh Mic Level 11 par unlock hoga!");
        };
        container.appendChild(btn);
    }
            }
// script.js ki sabse aakhri line ke baad ye add karein
let coins = 0;
let diamonds = 0;

// Showroom kholne ke liye function
function showStore() {
    document.getElementById('showroom-menu').style.display = 'block';
}

// Purchase process karne ke liye
function processPurchase(item, price) {
    let confirmPay = confirm("Confirm Purchase: " + item + " for Rs." + price + "?");
    if(confirmPay) {
        if(item.includes("Coins")) {
            let val = item.includes("100k") ? 100000 : 10000;
            coins += val;
            alert("Success! " + val + " Coins added to your account.");
        } else {
            diamonds += 200;
            alert("Success! 200 Diamonds added to your account.");
        }
        
        // UI Update
        if(document.getElementById('user-coins')) {
            document.getElementById('user-coins').innerHTML = "Coins: " + coins + " | Diamonds: " + diamonds;
        }
        document.getElementById('showroom-menu').style.display = 'none';
    }
}
let currentOrder = null;
let coins = 0;
let diamonds = 0;

// Store kholne ka function
function openStore() {
    document.getElementById('mega-store').style.display = 'block';
}

// Payment window kholna
function openPayment(d, c, p) {
    currentOrder = { diamonds: d, coins: c, price: p };
    document.getElementById('pay-details').innerHTML = "Total Amount: Rs. " + p.toLocaleString() + "<br>Number: 03XX-XXXXXXX"; // 👈 Apna Number yahan likhen
    document.getElementById('pay-popup').style.display = 'block';
}

// Payment complete hone par (Screenshot bhejne ke liye WhatsApp par redirect)
function finishPayment() {
    let whatsappMsg = "Hello Admin, Maine Rs." + currentOrder.price + " send kar diye hain " + currentOrder.diamonds + " Diamonds ke liye. Screenshot attach hai.";
    let waURL = "https://wa.me/923001234567?text=" + encodeURIComponent(whatsappMsg); // 👈 Apna Number yahan likhen
    
    window.open(waURL, '_blank');
    
    document.getElementById('pay-popup').style.display = 'none';
    document.getElementById('mega-store').style.display = 'none';
    
    alert("Shukriya! Screenshot milte hi Diamonds add kar diye jayenge.");
}
// Galiyon ki list (Aap mazeed lafz add kar sakte hain)
const badWords = ["gali1", "gali2", "abuse1", "badword"]; 
let abuseCount = {}; // Har user ki galtiyan count karne ke liye

function checkMessage(userId, message) {
    let msg = message.toLowerCase();
    let hasAbuse = badWords.some(word => msg.includes(word));

    if (hasAbuse) {
        if (!abuseCount[userId]) abuseCount[userId] = 0;
        abuseCount[userId]++;

        if (abuseCount[userId] >= 3) {
            banDevicePermanent(userId); // 3 dafa gali di toh Seedha BAN!
            return "Aapka Device permanent ban kar diya gaya hai.";
        }
        return "Warning: Gali dena mana hai! (Warning " + abuseCount[userId] + "/3)";
    }
    return message;
}
// Device Ban karne ka function
function banDevicePermanent(userId) {
    // Device ki memory mein ban save karna
    localStorage.setItem('isBanned', 'true');
    localStorage.setItem('banReason', 'Abusing in Chat');
    
    alert("SYSTEM ALERT: Aapko bad-tameezi ki wajah se is game se permanent ban kar diya gaya hai. Ab aap is mobile par game nahi khel sakte.");
    
    // Game ko band kar dena ya screen white kar dena
    document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'>DEVICE BANNED PERMANENTLY</h1><p style='text-align:center;'>Reason: Abusing and Violating Community Rules.</p>";
}

// Game load hote hi check karna ke kya ye mobile ban hai?
function checkBanStatus() {
    if (localStorage.getItem('isBanned') === 'true') {
        document.body.innerHTML = "<h1 style='color:red; text-align:center; margin-top:100px;'>DEVICE BANNED</h1>";
        window.stop(); // Game load hone se rok dena
    }
}

// Ise sabse pehle chalana hai
checkBanStatus();
// ==========================================
// STORE, SECURITY & ADMIN LOGIC
// ==========================================

let coins = 0;
let diamonds = 0;
const officialMembers = ["admin_muhammad", "owner_muhammad"]; // Aapki ID yahan ayegi

// 1. Store & Payment Logic
function openPayment(d, c, p) {
    let confirmPay = confirm("Order: Rs. " + p + "\nKya aap payment karke screenshot bhejenge?");
    if(confirmPay) {
        window.open("https://wa.me/923001234567?text=Payment Done for " + d + " Diamonds", "_blank");
        alert("Payment ke baad admin ko screenshot bhejien!");
    }
}

// 2. Official Badge & Admin Recognition
function checkOfficialStatus(userId) {
    if(officialMembers.includes(userId)) {
        console.log("Welcome Admin Muhammad!");
        // UI par badge dikhane ka logic yahan ayega
    }
}

// 3. Abuse Filter & Device Ban
const badWords = ["gali1", "gali2"]; // Yahan asli galiyan add karein

function checkAbuse(message) {
    let hasAbuse = badWords.some(word => message.toLowerCase().includes(word));
    if(hasAbuse) {
        alert("Gali dena mana hai! Teesri baar par Device BAN ho jayega.");
        // Device Ban ka logic
        // localStorage.setItem('isBanned', 'true');
    }
}

// 4. Initial Check
if(localStorage.getItem('isBanned') === 'true') {
    document.body.innerHTML = "<h1 style='color:red; text-align:center;'>DEVICE PERMANENTLY BANNED</h1>";
}
// User ka data structure
let userData = {
    name: "Muhammad User",
    level: 1,
    giftPoints: 0,
    diamonds: 0,
    coins: 0,
    tag: "Newbie"
};

// Gift bhejne par points barhane ka automated system
function sendGift(giftValue) {
    userData.giftPoints += giftValue;
    
    // Automatic Tag Check
    if (userData.giftPoints >= 1000 && userData.tag !== "Top Gifter") {
        userData.tag = "Top Gifter";
        userData.level += 5; // Reward as level up
        updateProfileUI();
        saveDataToCloud(); // Automatic Save
        alert("🎉 SYSTEM: Aapka 'Top Gifter' Tag Unlock ho gaya!");
    }
}

// UI ko update karne ka system
function updateProfileUI() {
    document.getElementById('display-name').innerHTML = `
        ${userData.name} 
        ${userData.giftPoints >= 1000 ? '<span class="gifter-tag-1k">💎 TOP GIFTER</span>' : ''}
    `;
    // Level dikhane ke liye
    console.log("Current Level: " + userData.level);
}
// ==========================================
// LOBBY TO GAME ENGINE
// ==========================================

function startGame(playerMode) {
    let lobby = document.getElementById('main-lobby');
    
    // 1. Loading Screen dikhana
    lobby.innerHTML = `
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; background:#120512;">
            <div class="game-loader"></div>
            <h3 style="color:gold; font-family:sans-serif;">Finding ${playerMode} Players...</h3>
            <p style="color:#aaa; font-size:12px;">Joining Maher ka Dera Table</p>
        </div>
    `;

    // 2. 2.5 seconds baad Board aur Audio Room on karna
    setTimeout(() => {
        // Lobby ko mukammal khatam karna
        lobby.style.display = 'none';
        
        // Board aur Party Room ko dikhana
        const board = document.getElementById('ludo-container');
        const room = document.getElementById('ludo-party-room');
        
        if(board) board.style.display = 'block';
        if(room) room.style.display = 'block';
        
        // Smooth entry animation dena
        board.classList.add('fade-in');
        
        console.log("Match Started: " + playerMode + " Players mode.");
        alert("Match Started! Good Luck.");
    }, 2500);
}

// Home button par click karke Lobby wapas lane ke liye (Optional)
function backToLobby() {
    location.reload(); // Sabse asan tarika reset karne ka
}




