import { LogOut, MessageSquare, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const location = useLocation();
  console.log("Current URL:", location.pathname);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="abosolute top-0 left-0 h-15 flex items-center justify-between p-5 border-b-1 border-card-border">
      <h3 className="text-xl font-bold leading-tight">Chat Connect</h3>
      <ul className="flex space-x-6">
        <li>
          <MessageSquare
            size={18}
            color={location.pathname === "/chat" ? "var(--icon-color)" : "gray"}
          />
        </li>
        <li>
          <User
            size={18}
            color={
              location.pathname === "/profile" ? "var(--icon-color)" : "gray"
            }
          />
        </li>
        <li>
          <LogOut
            onClick={() => {
              signOut();
              navigate("/");
            }}
            size={18}
            color={
              location.pathname === "/logout" ? "var(--icon-color)" : "gray"
            }
          />
        </li>
      </ul>
    </nav>
  );
}
