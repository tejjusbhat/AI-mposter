import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

interface MessageProps {
  id: Id<"messages">;
  sender: string;
  content: string;
  sentAt: Date;
  likes: number;
}

export default function Message(props: MessageProps) {
  const likeMessage = useMutation(api.messages.like);

  return (
    <div className="message">
      <span>{props.sender}:</span>
      <span>{props.content}</span>
      <span>{props.sentAt.toLocaleTimeString()}</span>
      <button
        onClick={async () => {
          await likeMessage({ messageId: props.id });
        }}
      >
        {props.likes ? <span>{props.likes}</span> : null} 🤍
      </button>
    </div>
  );
}
