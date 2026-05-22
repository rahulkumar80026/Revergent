import React, { useState } from "react";
import {
  X,
  Send,
  Sparkles,
  MessageCircle,
  Bot,
} from "lucide-react";

const AIChatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to Revergent Technologies. How can I help you today?",
    },
  ]);

  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  // Evergent Inspired Colors
  const theme = {
    primary: "#0B1F3A",
    secondary: "#123C73",
    accent: "#00AEEF",
    darkBg: "#091220",
    cardBg: "#111827",
    lightText: "#F8FAFC",
    mutedText: "#94A3B8",
    border: "#1E293B",
  };

  // Smart Local Replies
  const getBotReply = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hello") || text.includes("hi")) {
      return "Hello 👋 Welcome to Revergent Technologies.";
    }

    if (text.includes("erp")) {
      return "We provide enterprise ERP solutions for modern businesses.";
    }

    if (text.includes("pos")) {
      return "Our POS software supports billing, inventory and GST reports.";
    }

    if (text.includes("hotel")) {
      return "We provide Hotel & Resort Management Software solutions.";
    }

    if (text.includes("restaurant")) {
      return "We provide Restaurant POS and QR Ordering systems.";
    }

    if (
      text.includes("pricing") ||
      text.includes("price") ||
      text.includes("cost")
    ) {
      return "Please share your requirement for pricing details.";
    }

    if (text.includes("demo")) {
      return "Sure 👍 Please share your contact number for demo booking.";
    }

    if (text.includes("software")) {
      return "We develop ERP, POS, CRM and custom software solutions.";
    }

    if (text.includes("ai")) {
      return "We provide AI automation and enterprise smart solutions.";
    }

    if (text.includes("whatsapp")) {
      return "You can connect with our support team on WhatsApp.";
    }

    return "Thank you for contacting Revergent Technologies. Our team will assist you shortly 👋";
  };

  // Send Message
  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = message;

    setMessage("");
    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        role: "assistant",
        content: getBotReply(currentMessage),
      };

      setMessages((prev) => [...prev, botMessage]);

      setTyping(false);
    }, 900);
  };

  const Icon = isOpen ? X : MessageCircle;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
        className={`
          fixed bottom-6 right-6 z-[100]
          w-16 h-16
          rounded-full
          flex items-center justify-center
          transition-all duration-300
          hover:scale-110 active:scale-95
          border border-white/10
          bg-gradient-to-br
          from-[#0B1F3A]
          via-[#123C73]
          to-[#00AEEF]
          shadow-[0_10px_35px_rgba(0,174,239,0.35)]
          backdrop-blur-xl
          ${!isOpen ? "animate-aiPulse" : ""}
        `}
      >
        <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
      </button>

      {/* Chat Modal */}
      <div
        className={`
          fixed bottom-28 right-6 z-[99]
          w-[92%] sm:w-[390px]
          h-[560px]
          rounded-3xl
          overflow-hidden
          transition-all duration-500 ease-out
          border border-[#1E293B]
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          backdrop-blur-2xl
          ${
            isDark
              ? "bg-[#091220]/95"
              : "bg-white/95"
          }
          ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 translate-y-10 invisible"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            px-5 py-4
            bg-gradient-to-r
            from-[#0B1F3A]
            via-[#123C73]
            to-[#00AEEF]
          "
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
              <Sparkles className="w-5 h-5 text-white" />
            </div>

            <div>
              <h2 className="text-white font-semibold text-base tracking-wide">
                Revergent Nexus
              </h2>

              <p className="text-cyan-100 text-xs">
                Enterprise AI Assistant
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div
          className={`
            flex flex-col h-[calc(100%-76px)]
            ${
              isDark
                ? "bg-gradient-to-b from-[#091220] to-[#111827]"
                : "bg-slate-50"
            }
          `}
        >
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                {/* Assistant */}
                {msg.role === "assistant" && (
                  <div className="mr-2 mt-1">
                    <div
                      className="
                        w-9 h-9
                        rounded-xl
                        bg-gradient-to-br
                        from-[#0B1F3A]
                        to-[#00AEEF]
                        flex items-center justify-center
                        shadow-lg
                      "
                    >
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`
                    max-w-[80%]
                    px-4 py-3
                    rounded-2xl
                    text-sm
                    leading-relaxed
                    shadow-md
                    ${
                      msg.role === "user"
                        ? `
                          bg-gradient-to-r
                          from-[#123C73]
                          to-[#00AEEF]
                          text-white
                          rounded-br-md
                        `
                        : isDark
                        ? `
                          bg-[#111827]
                          border border-[#1E293B]
                          text-[#F8FAFC]
                          rounded-bl-md
                        `
                        : `
                          bg-white
                          text-slate-700
                          rounded-bl-md
                        `
                    }
                  `}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing */}
            {typing && (
              <div className="flex items-center gap-3">
                <div
                  className="
                    w-9 h-9
                    rounded-xl
                    bg-gradient-to-br
                    from-[#0B1F3A]
                    to-[#00AEEF]
                    flex items-center justify-center
                  "
                >
                  <Bot className="w-4 h-4 text-white" />
                </div>

                <div
                  className={`
                    px-4 py-3 rounded-2xl text-sm
                    ${
                      isDark
                        ? "bg-[#111827] border border-[#1E293B] text-slate-300"
                        : "bg-white text-slate-500"
                    }
                  `}
                >
                  Typing...
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {[
              "ERP",
              "POS",
              "Pricing",
              "Demo",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setMessage(item)}
                className="
                  px-3 py-1.5
                  text-xs
                  rounded-full
                  border
                  border-[#00AEEF]/20
                  bg-[#00AEEF]/10
                  text-[#00AEEF]
                  hover:bg-[#00AEEF]/20
                  transition
                "
              >
                {item}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div
            className={`
              p-4 border-t
              ${
                isDark
                  ? "border-[#1E293B] bg-[#091220]"
                  : "border-slate-200 bg-white"
              }
            `}
          >
            <div
              className={`
                flex items-center gap-3
                rounded-2xl px-4 py-3
                border transition-all
                ${
                  isDark
                    ? `
                      bg-[#0F172A]
                      border-[#1E293B]
                    `
                    : `
                      bg-slate-100
                      border-slate-200
                    `
                }
              `}
            >
              <input
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" && sendMessage()
                }
                type="text"
                placeholder="Ask anything..."
                className={`
                  flex-1
                  bg-transparent
                  outline-none
                  text-sm
                  ${
                    isDark
                      ? "text-white placeholder:text-slate-500"
                      : "text-slate-700 placeholder:text-slate-400"
                  }
                `}
              />

              <button
                onClick={sendMessage}
                className="
                  w-10 h-10
                  rounded-xl
                  flex items-center justify-center
                  bg-gradient-to-r
                  from-[#0B1F3A]
                  via-[#123C73]
                  to-[#00AEEF]
                  hover:opacity-90
                  transition
                  shadow-lg
                "
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes aiPulse {
          0% {
            box-shadow:
              0 0 0 0 rgba(0,174,239,0.45);
          }

          70% {
            box-shadow:
              0 0 0 18px rgba(0,174,239,0);
          }

          100% {
            box-shadow:
              0 0 0 0 rgba(0,174,239,0);
          }
        }

        .animate-aiPulse {
          animation: aiPulse 2.2s infinite;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0,174,239,0.35);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </>
  );
};

export default AIChatbot;