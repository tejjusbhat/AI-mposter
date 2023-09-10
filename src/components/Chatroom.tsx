import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Doc } from "../../convex/_generated/dataModel";
import Badge from "./Badge";
import { SignOutButton } from "@clerk/clerk-react";
import SendMessage from "./SendMessage";
import Message from "./Message";

export default function Chatroom(props: { chatroom: Doc<"chatrooms"> }) {
  const messages = useQuery(api.messages.list, { chatroomId: props.chatroom._id }) || [];

  return (
    <main>
      <h1>{props.chatroom.name}</h1>
      <Badge />
      <h2>
        <SignOutButton />
      </h2>
      <div className="messageBox">
        {messages.map((message) => (
          <Message
            key={message._id.toString()}
            id={message._id}
            sender={message.sender}
            content={message.content}
            sentAt={new Date(message._creationTime)}
            likes={message.likes}
          />
        ))}
      </div>
      <SendMessage chatroomId={props.chatroom._id}/>
    </main>
  );
}
