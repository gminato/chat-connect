import { Search } from "lucide-react";
import ContactUser from "./ContactUser";

//({profileUrl,name, lastMessage, time, unreadCount, status}) {

const contacts = [
  {
    id: 1,
    profileUrl:
      "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
    name: "John Doe",
    lastMessage: "Hello, how are you?",
    time: "10:30 AM",
    unreadCount: 2,
    status: "online",
  },
  {
    id: 2,
    profileUrl:
      "https://ui-avatars.com/api/?name=Jane+Smith&background=0D8ABC&color=fff",
    name: "Jane Smith",
    lastMessage: "Are we still on for lunch?",
    time: "Yesterday",
    unreadCount: 4,
    status: "offline",
  },
  {
    id: 3,
    profileUrl:
      "https://ui-avatars.com/api/?name=Michael+Johnson&background=0D8ABC&color=fff",
    name: "Michael Johnson",
    lastMessage: "Can you send me the report?",
    time: "2 days ago",
    unreadCount: 1,
    status: "online",
  },
  {
    id: 4,
    profileUrl:
      "https://ui-avatars.com/api/?name=Emily+Davis&background=0D8ABC&color=fff",
    name: "Emily Davis",
    lastMessage: "Let's catch up soon!",
    time: "3 days ago",
    unreadCount: 0,
    status: "offline",
  },
  {
    id: 5,
    profileUrl:
      "https://ui-avatars.com/api/?name=Chris+Brown&background=0D8ABC&color=fff",
    name: "Chris Brown",
    lastMessage: "Did you finish the project?",
    time: "1 week ago",
    unreadCount: 3,
    status: "online",
  },
  {
    id: 13,
    profileUrl:
      "https://ui-avatars.com/api/?name=Michael+Johnson&background=0D8ABC&color=fff",
    name: "Michael Johnson",
    lastMessage: "Can you send me the report?",
    time: "2 days ago",
    unreadCount: 1,
    status: "online",
  },
  {
    id: 34,
    profileUrl:
      "https://ui-avatars.com/api/?name=Emily+Davis&background=0D8ABC&color=fff",
    name: "Emily Davis",
    lastMessage: "Let's catch up soon!",
    time: "3 days ago",
    unreadCount: 0,
    status: "offline",
  },
  {
    id: 25,
    profileUrl:
      "https://ui-avatars.com/api/?name=Chris+Brown&background=0D8ABC&color=fff",
    name: "Chris Brown",
    lastMessage: "Did you finish the project?",
    time: "1 week ago",
    unreadCount: 3,
    status: "online",
  },
];

export default function Contact() {
  return (
    <div
      className="m-4 border rounded-lg border-gray-300"
      style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="flex justify-center border-b border-gray-300">
        <div className="relative">
          <input
            className="border m-4 p-1 pl-2 py-2 rounded-2xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--icon-color)]"
            type="text"
            placeholder="Search Contact..."
          />
          <span className="absolute inset-y-0 right-8 flex items-center justify-center">
            <Search color="var(--icon-color)" size={18} />
          </span>
        </div>
      </div>
      {/* contacts */}
      <div className="overflow-y-auto h-[calc(100vh-200px)]">
        {contacts.map((contact) => (
          <ContactUser
            key={contact.id}
            id={contact.id}
            profileUrl={contact.profileUrl}
            name={contact.name}
            lastMessage={contact.lastMessage}
            time={contact.time}
            unreadCount={contact.unreadCount}
            status={contact.status}
          />
        ))}
      </div>
    </div>
  );
}
