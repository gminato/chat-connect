import { ArrowLeft, SendHorizonal } from "lucide-react";
import { useNavigate } from "react-router";

export default function MessageScreen() {
  const messages = [
    {
      id: 1,
      sender: "John Doe",
      message: "Hello! How are you?",
      time: "10:00 AM",
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "Are we still on for the meeting?",
      time: "10:05 AM",
    },
    {
      id: 3,
      sender: "John Doe",
      message: "Yes, see you at 2 PM.",
      time: "10:10 AM",
    },
    {
      id: 4,
      sender: "Jane Smith",
      message: "Great! Looking forward to it.",
      time: "10:15 AM",
    },
    {
      id: 5,
      sender: "John Doe",
      message: "By the way, did you finish the report?",
      time: "10:20 AM",
    },
    {
      id: 6,
      sender: "Jane Smith",
      message: "Almost done, just need to add some graphs.",
      time: "10:25 AM",
    },
    {
      id: 7,
      sender: "John Doe",
      message: "Sounds good! Let me know if you need help.",
      time: "10:30 AM",
    },
    {
      id: 8,
      sender: "Jane Smith",
      message: "Thanks! I appreciate it.",
      time: "10:35 AM",
    },
    {
      id: 9,
      sender: "John Doe",
      message: "No problem! Talk to you later.",
      time: "10:40 AM",
    },
    {
      id: 10,
      sender: "Jane Smith",
      message: "See you!",
      time: "10:45 AM",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex items-center justify-between p-4  ">
        <ArrowLeft
          onClick={() => {
            navigate("/chat");
          }}
        />
        <h2 className="text-lg font-semibold">Chat with John Doe</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "John Doe" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === "John Doe"
                  ? "bg-white text-gray-800 shadow"
                  : "bg-[var(--icon-color)] text-white"
              }`}
            >
              <p className="text-sm">{message.message}</p>
              <p className="text-xs text-gray-400 mt-1 text-right">
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center p-4 bg-white border-t border-gray-200">
        <input
          type="text"
          placeholder="Type a message"
          className="w-full mr-3 px-4 py-2 border border-card-border rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--icon-color)]"
        />
        <button className="mx-3 text-white bg-[var(--icon-color)] rounded-full p-2 hover:bg-[var(--icon-color)]">
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  );
}
