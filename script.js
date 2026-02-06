function roll() {
    let diceBtn = document.getElementById('dice-btn');
    let result = document.getElementById('result');
    
    // Gitta ghumne ki animation ka ehsas
    diceBtn.innerHTML = "🎲...";
    
    setTimeout(() => {
        let number = Math.floor(Math.random() * 6) + 1;
        
        // Asli Ludo Star ki tarah result dikhayen
        if (number === 6) {
            result.innerHTML = "Wah! 6 Aaya! Ek aur bari.";
            result.style.color = "#2ed573"; // Hara rang
        } else {
            result.innerHTML = "Aapka number: " + number;
            result.style.color = "white";
        }
        
        diceBtn.innerHTML = "🎲 ROLL";
    }, 500);
}
