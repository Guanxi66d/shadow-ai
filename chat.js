
export default async function handler(req, res) {
    const apiKey = process.env.OPENAI_API_KEY;
    const { message } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }]
        })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "出错了，请稍后重试。";
    res.status(200).json({ reply });
}
