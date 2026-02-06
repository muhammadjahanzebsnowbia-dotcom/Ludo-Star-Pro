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


