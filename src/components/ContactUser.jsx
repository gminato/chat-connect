import { useNavigate } from "react-router";

export default function ContactUser({
  id,
  profileUrl,
  name,
  lastMessage,
  time,
  unreadCount,
  status,
}) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/message/${id}`)}
      className="flex items-center p-4 border-b border-gray-200 hover:bg-gray-100 cursor-pointer w-full"
    >
      <div className="relative">
        <img
          src={profileUrl}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        {status && (
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
              status === "online" ? "bg-green-500" : "bg-gray-400"
            }`}
          ></span>
        )}
      </div>
      <div className="ml-4 flex-1">
        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="text-sm text-gray-600 truncate max-w-[180px]">
            {lastMessage}
          </div>
          {unreadCount > 0 && (
            <div className="mt-1 text-xs text-white bg-[var(--icon-color)]  rounded-full px-2 py-0.5 inline-block">
              {unreadCount}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
