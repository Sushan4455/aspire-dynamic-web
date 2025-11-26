import express from "express";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 🔒 never put this in frontend
});

router.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    // Add system prompt to specialize for your website
    const fullMessages = [
      {
        role: "system",
        content:
          "You are Aspire Career Education Consultancy's website assistant. Answer only questions related to Aspire, study abroad, visas, training, and courses based on the information you know. Be clear and friendly.",
      },
      ...messages,
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-5.1-mini",
      messages: fullMessages,
    });

    const reply = completion.choices[0]?.message?.content || "";

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Server error, please try again later." });
  }
});

export default router;
