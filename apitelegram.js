export default async function handler(req, res) {
  try {
    const { service } = req.body;

    const token = "PUT_YOUR_BOT_TOKEN_HERE";
    const chatId = "PUT_YOUR_CHAT_ID_HERE";

    const message = `
📥 طلب جديد
🛠 الخدمة: ${service}
⏰ الوقت: ${new Date().toLocaleString("ar-SA")}
`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    res.status(200).json({ ok: true });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}