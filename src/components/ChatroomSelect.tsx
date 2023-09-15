import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ChatroomIcon from "./ChatroomIcon";
import { SignOutButton } from "@clerk/clerk-react";

export default function ChatroomSelect() {
  const chatrooms = useQuery(api.chatrooms.list) || [];
  return (
    <div className="chatroomSelect">
      <div className="header">
        <button>Create Chatroom</button>
        <div className="signOutButton">
          <SignOutButton>
            <button>Sign Out</button>
          </SignOutButton>
        </div>
      </div>
      <span className="text-wrapper">SELECT CHATROOM</span>
      <div className="chatroomList">
        {chatrooms.map((chatroom) => {
          return (
            <ChatroomIcon
              key={chatroom.chatroomId.toString()}
              id={chatroom.chatroomId}
              name={chatroom.name}
              creator={chatroom.creator}
            />
          );
        })}
      </div>
    </div>
  );
}
