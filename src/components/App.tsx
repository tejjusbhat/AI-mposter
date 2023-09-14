import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatroomSelect from "./ChatroomSelect";
import LoadingChatroom from "./LoadingChatroom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chatrooms/:chatroomId" element={<LoadingChatroom />} />
        <Route path="/" element={<ChatroomSelect />} />
      </Routes>
    </Router>
  );
}
