import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import { useNavigate } from "react-router-dom";
import SendMessage from "./SendMessage";
import Message from "./Message";

interface ChatroomPageProps {
  chatroomId: Id<"chatrooms">;
  creator: string;
  name: string;
}

export default function ChatroomPage(props: ChatroomPageProps) {
  const messages =
    useQuery(api.messages.list, { chatroomId: props.chatroomId }) || [];

  const navigate = useNavigate();

  return (
    <div className="chatroomPage">
      <div className="container">
        <div className="chatroomHeader">
          <span>{props.name}</span>
          <button
            onClick={() => {
              navigate(`/`);
            }}
          >
            Back
          </button>
        </div>
        <div className="messageBox">
          {messages.map((message) => (
            <Message
              key={message._id.toString()}
              id={message._id}
              sender={"Anonymous"}
              content={message.content}
              sentAt={new Date(message._creationTime)}
              likes={message.likes}
            />
          ))}
        </div>
        <SendMessage chatroomId={props.chatroomId} />
      </div>
    </div>
  );
}
