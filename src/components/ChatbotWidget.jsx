import React, { useState } from "react";
import whatsapp from "../assets/whatsapp-svgrepo-com.svg";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I’m Aspire’s assistant. Ask me anything about courses, study abroad, or training programs.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // Frontend-only reply logic
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsSending(true);

    setTimeout(() => {
      const text = userMessage.content.toLowerCase();
      let reply =
        "Thank you for your question! Our team will get back to you soon. Meanwhile, you can explore our courses and study destinations on the website.";

      if (text.includes("uk") || text.includes("united kingdom")) {
        reply =
          "For the UK, Aspire helps you with university selection, documentation, SOP, interview preparation, and student visa guidance. You can check the ‘Study in UK’ page for details on universities, eligibility, and FAQs.";
      } else if (
        text.includes("australia") ||
        text.includes("canada") ||
        text.includes("usa") ||
        text.includes("japan") ||
        text.includes("dubai")
      ) {
        reply =
          "We provide counselling for destinations like Australia, Canada, USA, Japan, and Dubai. We help with course selection, application, and visa documentation based on your profile.";
      } else if (
        text.includes("training") ||
        text.includes("course") ||
        text.includes("techfusion") ||
        text.includes("class")
      ) {
        reply =
          "We offer training in Digital Marketing, Canva Design, Video Editing, UI Design, Public Speaking, Life Skills, Languages and more. You can register through the Course Registration page or contact us for batch timing details.";
      } else if (
        text.includes("english") ||
        text.includes("japanese") ||
        text.includes("german") ||
        text.includes("language")
      ) {
        reply =
          "Yes, we provide language classes such as English, Japanese, and German, designed for study abroad and career growth. You can ask us for current batch timings and fees.";
      } else if (
        text.includes("contact") ||
        text.includes("phone") ||
        text.includes("location") ||
        text.includes("address")
      ) {
        reply =
          "You can contact Aspire Career Education Consultancy at aspire.acec@gmail.com or call 01-5925762 / 9851352285. Our office is located in Sukedhara, Kathmandu, Nepal.";
      } else if (
        text.includes("appointment") ||
        text.includes("consult") ||
        text.includes("counselling")
      ) {
        reply =
          "You can book an appointment by filling the contact form on our website or visiting our office at Sukedhara, Kathmandu. We’ll help you with career counselling, course selection, and study abroad planning.";
      }

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      setIsSending(false);
    }, 600);
  };

  // WhatsApp config
  const phoneNumber = "9779812345678"; // 🔁 put your real WhatsApp number here
  const message = "Hello! I want to know more about Aspire courses.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {/* WhatsApp floating button – left of chatbot */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-20 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition md:bottom-6 md:right-24"
        aria-label="Chat on WhatsApp"
      >
       <svg fill="#ffffff" className="w-10" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
      </a>

      {/* Chatbot floating button */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-500/40 hover:bg-emerald-700 transition md:bottom-6 md:right-6"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-2xl">💬</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[320px] sm:w-[360px] rounded-2xl bg-white shadow-2xl border border-slate-200 flex flex-col overflow-hidden md:bottom-24 md:right-6">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-600 to-green-500 text-white">
            <div>
              <p className="text-sm font-semibold">Aspire Assistant</p>
              <p className="text-[11px] text-emerald-50/90">
                Ask about courses, visas, training & more
              </p>
            </div>
            <div className="flex items-center gap-1 text-[10px]">
              <span className="h-2 w-2 rounded-full bg-lime-300 animate-pulse" />
              <span>Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 max-h-80 overflow-y-auto px-3 py-3 space-y-2 bg-slate-50">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-emerald-600 text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-1 rounded-2xl bg-white border border-slate-200 px-3 py-2 text-[11px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-bounce" />
                  Typing…
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="border-t border-slate-200 bg-white px-3 py-2 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              className="flex-1 text-xs rounded-xl border border-slate-200 px-3 py-2 outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              type="submit"
              disabled={isSending || !input.trim()}
              className="inline-flex h-9 px-3 items-center justify-center rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
