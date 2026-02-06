// ==========================================
// MASTER ENGINE: LUDO SULTAN
// ==========================================

let totalGiftingPoints = 0;
const badWords = ["gali1", "gali2"]; // Galiyon ki list yahan dalien

// 1. Game Launch & Transition
function launchSultanGame(mode) {
    let lobby = document.getElementById('main-lobby');
    lobby.innerHTML = `
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; height:100vh; background:#1a051a;">
            <div class="sultan-loader"></div>
            <h2 style="color:gold; font-family:sans-serif; margin-top:20px;">Sultan Entering ${mode}...</h2>
        </div>
    `;

    setTimeout(() => {
        lobby.style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
    }, 2000);
}

// 2. Chat & Abuse Filter
function sendSultanMessage() {
    let input = document.getElementById('chat-in');
    let chatBox = document.getElementById('chat-box');
    let msg = input.value.toLowerCase();

    if (msg.trim() === "") return;

    // Abuse Check
    let hasAbuse = badWords.some(word => msg.includes(word));
    if (hasAbuse) {
        alert("SULTAN ALERT: Bad language is not allowed! Your device will be BANNED.");
        localStorage.setItem('isBanned', 'true');
        location.reload();
        return;
    }

    let div = document.createElement('div');
    div.innerHTML = `<b>You:</b> ${input.value}`;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
}

// 3. Gifting & 1000 Points Tag
function openGiftStore() {
    let amount = prompt("Enter Gift Value (e.g. 500):");
    if (amount) {
        let val = parseInt(amount);
        totalGiftingPoints += val;
        alert("Gift Sent! Points: " + totalGiftingPoints);

        // Auto Tag System
        if (totalGiftingPoints >= 1000) {
            document.getElementById('vip-status').style.display = 'inline-block';
            document.getElementById('user-name').style.color = "gold";
            alert("👑 ROYALTY UNLOCKED: You are now a TOP GIFTER!");
        }
    }
}

// 4. Security Check (Permanent Device Ban)
if (localStorage.getItem('isBanned') === 'true') {
    document.body.innerHTML = `
        <div style="background:black; color:red; height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:20px;">
            <h1>🚨 DEVICE BANNED 🚨</h1>
            <p>You have been permanently banned from Ludo Sultan for violating community rules.</p>
        </div>
    `;
}

console.log("Ludo Sultan System Loaded Successfully."); 
// ==========================================
// NEW USER 20% DISCOUNT LOGIC (APPEND TO END)
// ==========================================

function applySultanDiscount() {
    // Check karein kya user ne pehle khareedari ki hai
    let isNewUser = localStorage.getItem('sultan_customer') === null;

    if (isNewUser) {
        console.log("Welcome Sultan! New User Discount Applied.");
        
        // 20% Discounted Prices ka data
        const discountedPrices = {
            "p1": "Rs. 280",   // 350 ka 20% off
            "p2": "Rs. 5,200", // 6,500 ka 20% off
            "p3": "Rs. 52,000" // 65,000 ka 20% off
        };
        // ==========================================
// MONTHLY TOP SULTANS (LEADERBOARD)
// ==========================================

function showMonthlyLeaderboard() {
    // Demo Data (Real data Firebase se aayega)
    const monthlyTop = [
        { name: "Sultan Malik", points: "1.2M", rank: 1, avatar: "👑" },
        { name: "Maher King", points: "950K", rank: 2, avatar: "🥈" },
        { name: "Don No.1", points: "800K", rank: 3, avatar: "🥉" }
    ];

    let monthlyHTML = `
        <div id="monthly-board" style="background: linear-gradient(180deg, #2d0a2d, #000); padding: 20px; border-radius: 20px; border: 2px solid gold; margin-top: 20px; font-family: sans-serif;">
            <h3 style="color: gold; text-align: center; margin-bottom: 20px; text-shadow: 0 0 10px gold;">🏆 MONTHLY TOP SELLERS</h3>
            
            <div style="display: flex; justify-content: space-around; align-items: flex-end; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #444;">
                
                <div style="text-align: center;">
                    <div style="font-size: 30px;">🥈</div>
                    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #ccc; background: #333; margin: 0 auto;"></div>
                    <small style="color: #ccc; display: block;">${monthlyTop[1].name}</small>
                    <b style="color: #00ff00; font-size: 10px;">${monthlyTop[1].points}</b>
                </div>

                <div style="text-align: center; transform: scale(1.2);">
                    <div style="font-size: 40px; margin-bottom: -10px;">👑</div>
                    <div style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid gold; background: #444; margin: 0 auto; box-shadow: 0 0 15px gold;"></div>
                    <small style="color: gold; font-weight: bold; display: block;">${monthlyTop[0].name}</small>
                    <b style="color: #00ff00; font-size: 10px;">${monthlyTop[0].points}</b>
                </div>

                <div style="text-align: center;">
                    <div style="font-size: 30px;">🥉</div>
                    <div style="width: 50px; height: 50px; border-radius: 50%; border: 2px solid #cd7f32; background: #333; margin: 0 auto;"></div>
                    <small style="color: #cd7f32; display: block;">${monthlyTop[2].name}</small>
                    <b style="color: #00ff00; font-size: 10px;">${monthlyTop[2].points}</b>
                </div>
            </div>

            <p style="text-align: center; font-size: 11px; color: #888;">Rewards will be sent on the 1st of next month!</p>
        </div>
    `;

    // Is board ko Court (Party Room) ke end mein chipka dein
    let room = document.querySelector('.party-room');
    if(room) {
        let existing = document.getElementById('monthly-board');
        if(existing) existing.remove();
        room.insertAdjacentHTML('beforeend', monthlyHTML);
    }
}

// Har 1 min baad board refresh karein
setInterval(showMonthlyLeaderboard, 60000);
showMonthlyLeaderboard();
        

        // Screen par prices badalne ka system
        // Note: Ye tab kaam karega jab aapke price elements ki IDs ye hongi
        if(document.getElementById('price-500')) {
            document.getElementById('price-500').innerHTML = `<span style="text-decoration:line-through; color:red; font-size:10px;">Rs.350</span> ${discountedPrices.p1}`;
        }
        if(document.getElementById('price-6500')) {
            document.getElementById('price-6500').innerHTML = `<span style="text-decoration:line-through; color:red; font-size:10px;">Rs.6500</span> ${discountedPrices.p2}`;
        }
        if(document.getElementById('price-65000')) {
            document.getElementById('price-65000').innerHTML = `<span style="text-decoration:line-through; color:red; font-size:10px;">Rs.65000</span> ${discountedPrices.p3}`;
        }
        
        // Ek chota banner dikhane ke liye
        let banner = document.createElement('div');
        banner.style = "background:red; color:white; text-align:center; font-size:12px; padding:5px; font-weight:bold;";
        banner.innerText = "✨ NEW SULTAN OFFER: 20% DISCOUNT APPLIED! ✨";
        document.body.prepend(banner);
    }
}

// Purchase mukammal hone par ye function call karein taaki discount khatam ho jaye
function finalizePurchase() {
    localStorage.setItem('sultan_customer', 'true');
    alert("Purchase Successful! Agli baar prices normal honge.");
    location.reload();
}

// Game load hotay hi discount check karein
window.onload = function() {
    applySultanDiscount();
};
// ==========================================
// ADVANCED SULTAN CHAT SYSTEM (APPEND TO END)
// ==========================================

function sendSultanMessage() {
    let input = document.getElementById('chat-in');
    let chatBox = document.getElementById('chat-box');
    let msgText = input.value.trim();

    if (msgText === "") return;

    // 1. Create Message Element
    let messageDiv = document.createElement('div');
    messageDiv.style.marginBottom = "8px";
    messageDiv.style.padding = "5px 10px";
    messageDiv.style.borderRadius = "8px";
    messageDiv.style.fontSize = "13px";
    messageDiv.style.width = "fit-content";
    messageDiv.style.maxWidth = "80%";

    // 2. Check if User is a VIP (Top Gifter)
    let isVIP = totalGiftingPoints >= 1000;

    if (isVIP) {
        // Shahi (VIP) Message Style
        messageDiv.style.background = "linear-gradient(45deg, #4b0082, #800080)";
        messageDiv.style.borderLeft = "3px solid gold";
        messageDiv.style.boxShadow = "0 0 8px rgba(255, 215, 0, 0.4)";
        messageDiv.innerHTML = `<span style="color:gold; font-weight:bold;">👑 Sultan:</span> <span style="color:white;">${msgText}</span>`;
    } else {
        // Normal Message Style
        messageDiv.style.background = "rgba(255,255,255,0.1)";
        messageDiv.innerHTML = `<span style="color:#aaa; font-weight:bold;">Member:</span> <span style="color:#eee;">${msgText}</span>`;
    }

    // 3. Add to Chat Box & Auto-Scroll
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;

    // 4. Clear Input
    input.value = "";
}

// Enter Key se Message bhejne ka system
document.getElementById('chat-in').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendSultanMessage();
    }
});
// ==========================================
// TOP GIFT SENDER & LIVE ANNOUNCEMENT
// ==========================================

// 1. Live Gift Banner (Screen ke upar chalne wali patti)
function showGiftAnnouncement(senderName, giftName) {
    let announcement = document.createElement('div');
    announcement.style = `
        position: fixed; top: 70px; left: 0; width: 100%; 
        background: rgba(0, 0, 0, 0.8); color: gold; 
        padding: 8px; text-align: center; z-index: 10000;
        border-top: 1px solid gold; border-bottom: 1px solid gold;
        font-weight: bold; font-size: 14px; animation: fadeInOut 4s forwards;
    `;
    announcement.innerHTML = `👑 SULTAN NEWS: <span style="color:white;">${senderName}</span> sent a <span style="color:#00ff00;">${giftName}</span>! 🎁`;
    document.body.appendChild(announcement);

    // 4 second baad khud hat jaye
    setTimeout(() => { announcement.remove(); }, 4000);
}

// 2. Top Senders List (Gifting Panel ke neeche show hoga)
let topSenders = [
    {name: "Commander", points: 5500},
    {name: "Ali King", points: 3200},
    {name: "Maher", points: 1200}
];

function updateLeaderboard() {
    let boardHTML = `<div style="padding:10px; background:rgba(255,215,0,0.1); border-radius:10px; margin-top:10px;">
        <h5 style="color:gold; margin:0 0 10px 0; text-align:center;">🏆 TOP GIFT SENDERS</h5>`;
    
    // Sort senders by points
    topSenders.sort((a, b) => b.points - a.points);

    topSenders.slice(0, 3).forEach((sender, index) => {
        boardHTML += `
            <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:5px; border-bottom:1px solid #333;">
                <span>${index + 1}. ${sender.name}</span>
                <span style="color:gold;">${sender.points} pts</span>
            </div>`;
    });
    
    boardHTML += `</div>`;
    
    // Ise Chat box ke neeche ya Gifting panel mein kahin bhi dikha sakte hain
    let chatBox = document.getElementById('chat-box');
    if(chatBox) {
        let oldBoard = document.getElementById('sender-board');
        if(oldBoard) oldBoard.remove();
        
        let boardDiv = document.createElement('div');
        boardDiv.id = "sender-board";
        boardDiv.innerHTML = boardHTML;
        chatBox.parentNode.insertBefore(boardDiv, chatBox.nextSibling);
    }
}

// 3. Jab koi Gift bheje toh ye function call ho
function onGiftSent(giftName, points) {
    let sender = "You"; // Baad mein login name se replace hoga
    totalGiftingPoints += points;
    
    // Update local list for demo
    topSenders.push({name: sender, points: totalGiftingPoints});
    
    showGiftAnnouncement(sender, giftName);
    updateLeaderboard();
}

// Check for fade animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateY(-20px); }
        15% { opacity: 1; transform: translateY(0); }
        85% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);

// Shuru mein leaderboard dikha dein
updateLeaderboard();
// ==========================================
// OFFICIALS ONLY: CLUB LEVEL BOOSTER
// ==========================================

// 1. Check karein ke kya banda "Official" hai?
// Note: Real game mein ye ID database se match hogi
let currentUserRole = "OFFICIAL"; // Agar aam banda ho to "USER" likh dein

function officialLevelBoost() {
    if (currentUserRole !== "OFFICIAL") {
        alert("🚨 ACCESS DENIED: Yeh taqat sirf Ludo Sultan Officials ke paas hai!");
        return;
    }

    let confirmBoost = confirm("👑 SULTAN POWER: Kya aap is Club ka Level foran UP karna chahte hain?");
    
    if (confirmBoost) {
        // Club level logic
        let currentLevel = 15; // Example level
        let newLevel = currentLevel + 1;
        
        // UI Update
        alert("🚀 BOOSTED! Club Level automatically upgrade ho gaya: LVL " + newLevel);
        
        // Yahan Announcement chala dein
        showGiftAnnouncement("SYSTEM", "CLUB LEVEL BOOSTED BY OFFICIAL 👑");
        
        // Leaderboard refresh karein
        updateLeaderboard();
    }
}

// 2. Official Button (Jo sirf officials ko dikhega)
function showOfficialTools() {
    if (currentUserRole === "OFFICIAL") {
        let toolDiv = document.createElement('div');
        toolDiv.style = "position:fixed; bottom:80px; right:10px; z-index:10001;";
        toolDiv.innerHTML = `
            <button onclick="officialLevelBoost()" style="background:linear-gradient(gold, orange); border:2px solid white; border-radius:50%; width:60px; height:60px; font-size:10px; font-weight:bold; cursor:pointer; box-shadow:0 0 10px gold;">
                LEVEL<br>UP
            </button>
        `;
        document.body.appendChild(toolDiv);
    }
}

// Check karein aur button dikhayein
showOfficialTools();
// ==========================================
// FINAL FACEBOOK LOGIN & ACCESS CONTROL
// ==========================================

// 1. Facebook SDK Setup
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_FB_APP_ID', // Yahan apni App ID lagayein
        cookie     : true,
        xfbml      : true,
        version    : 'v18.0'
    });
    checkLoginState();
};

// 2. Login Function (Mandatory for Game/Clubs)
function loginWithFacebook() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            FB.api('/me', {fields: 'name,picture.type(large)'}, function(user) {
                // DP sirf Facebook se aayegi
                localStorage.setItem('sultan_dp', user.picture.data.url);
                document.getElementById('user-dp').src = user.picture.data.url;

                // Naam agar pehle se set nahi hai to FB wala utha lo
                if (!localStorage.getItem('sultan_custom_name')) {
                    localStorage.setItem('sultan_custom_name', user.name);
                    document.getElementById('user-name').innerText = user.name;
                }

                localStorage.setItem('sultan_session', 'active');
                alert("Sultan " + user.name + "! Login Safal Raha. Ab aap khel sakte hain.");
                
                // Game Unlock karein
                unlockSultanFeatures();
            });
        }
    }, {scope: 'public_profile'});
}

// 3. Lock/Unlock System
function unlockSultanFeatures() {
    let session = localStorage.getItem('sultan_session');
    let buttons = document.querySelectorAll('.mode-card, .mic-slot, #gift-btn');
    
    if (session === 'active') {
        buttons.forEach(b => {
            b.style.opacity = "1";
            b.style.pointerEvents = "auto";
        });
        if(document.getElementById('fb-login-btn')) {
            document.getElementById('fb-login-btn').style.display = 'none';
        }
    } else {
        buttons.forEach(b => {
            b.style.opacity = "0.4";
            b.style.pointerEvents = "none";
        });
    }
}

// 4. Initial Load par check karein
function checkLoginState() {
    unlockSultanFeatures();
    
    let savedName = localStorage.getItem('sultan_custom_name');
    let savedDP = localStorage.getItem('sultan_dp');
    
    if (savedName) document.getElementById('user-name').innerText = savedName;
    if (savedDP) document.getElementById('user-dp').src = savedDP;
}

// Page load par system activate karein
window.addEventListener('load', checkLoginState);



