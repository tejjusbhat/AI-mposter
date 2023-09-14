import { useParams } from "react-router-dom";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import ChatroomPage from "./ChatroomPage";

export default function LoadingChatroom() {
  type ChatroomParams = {
    chatroomId: string;
  };

  const { chatroomId } = useParams<ChatroomParams>();

  if (!chatroomId) {
    throw new Error("No chatroom ID provided");
  }

  const chatroom = useQuery(api.chatrooms.getChatroom, {
    chatroomId: chatroomId,
  });

  if (!chatroom) {
    return <div>Loading...</div>;
  }

  return (
    <ChatroomPage
      chatroomId={chatroom.chatroomId}
      creator={chatroom.creator}
      name={chatroom.name}
    />
  );
}
