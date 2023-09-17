import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ChatroomIcon from "./ChatroomIcon";
import { SignOutButton } from "@clerk/clerk-react";
import { FormEvent, useState } from "react";
import ChatroomCreate from "./ChatroomCreate";

export default function ChatroomSelect() {
  const chatrooms = useQuery(api.chatrooms.list) || [];
  const [createChatroom, setCreateChatroom] = useState(false);

  function toggleCreateChatroom(e: FormEvent) {
    if (e.target === e.currentTarget) {
      return setCreateChatroom(!createChatroom);
    }
  }

  return (
    <div className="chatroomSelect">
      <div className="header">
        <button
          onClick={(e) => {
            toggleCreateChatroom(e);
          }}
        >
          Create Chatroom
        </button>
        <div className="signOutButton">
          <SignOutButton>
            <button>Sign Out</button>
          </SignOutButton>
        </div>
      </div>
      {createChatroom && <ChatroomCreate goBack={toggleCreateChatroom} />}
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
