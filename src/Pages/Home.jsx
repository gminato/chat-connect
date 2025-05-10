import { CircleCheck } from "lucide-react";
import { useNavigate } from "react-router";
import { auth, provider } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleUserSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          console.log(token);
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          signIn(user);
          navigate("/chat");
        } else {
          console.error("No credential found");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData?.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(
          "Error during sign-in:",
          errorCode,
          errorMessage,
          email,
          credential
        );
      });
  };

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
                // navigate("/chat");
                handleUserSignIn();
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
