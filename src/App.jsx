import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Chat from "./Pages/Chat";
import MessageScreen from "./Pages/MessageScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/message/:id" element={<MessageScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
