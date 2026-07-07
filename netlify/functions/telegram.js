exports.handler = async (event) => {
  try {
    const { name, phone, service } = JSON.parse(event.body);

const token = "8948851759:AAG84aZdRBc4efBuT-MQaGRjhZ6qEPUuuhM";
const chatId = "1317198049";
const message = `
📥 طلب جديد

👤 الاسم: ${name}
📱 الجوال: ${phone}
🛠 الخدمة: ${service}

⏰ الوقت: ${new Date().toLocaleString("ar-SA")}
`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};