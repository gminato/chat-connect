import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="w-screen h-screen flex flex-1 items-center justify-center p-6 animate-fade-in">
      <div className="items-center justify-center w-full max-w-md">
        <h3 className="text-text-primary text-4xl mb-2 font-bold tracking-tight text-center">
          Chat Connect
        </h3>
        <p className="text-text-muted text-center mb-8">
          Connect, chat, and share with friends and colleagues
        </p>
        <div className="border border-card-border rounded-xl p-2">
          <div className="text-center mb-2">
            <h5 className="text-text-primary mb-8 mt-5 text-xl font-bold">
              Sign in to your account
            </h5>
            <button
              onClick={() => {
                navigate("/chat");
              }}
              className="px-20 py-2 border border-card-border rounded-2xl cursor-pointer hover:bg-card-border"
            >
              Sign in with Google
            </button>
            {/* Divider line with text */}
            <div className="flex items-center my-6 text-xs uppercase text-text-muted px-3">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="mx-4">Features</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>
          </div>
          <div className="px-4">
            <div className="flex space-x-3 space-y-3">
              <span>
                <CircleCheck color="var(--icon-color)" />
              </span>
              <span>Real-time messaging</span>
            </div>

            <div className="flex space-x-3 space-y-3">
              <span>
                <CircleCheck color="var(--icon-color)" />
              </span>
              <span>Unlimited messages</span>
            </div>

            <div className="flex space-x-3 space-y-3">
              <span>
                <CircleCheck color="var(--icon-color)" />
              </span>
              <span>Emoji Support</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
