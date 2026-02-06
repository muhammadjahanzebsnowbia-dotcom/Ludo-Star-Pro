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
