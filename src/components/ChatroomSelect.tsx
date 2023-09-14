import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import ChatroomIcon from "./ChatroomIcon";
import { SignOutButton } from "@clerk/clerk-react";
import CreateChatroom from "./ChatroomCreate";

export default function ChatroomSelect() {
  const chatrooms = useQuery(api.chatrooms.list) || [];
  return (
    <div>
      <SignOutButton />
      <h1>Chatrooms</h1>
      <CreateChatroom />
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
