import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import useStoreUserEffect from "../useStoreUserEffect";
import ChatroomIcon from "./ChatroomIcon";

export default function App() {
  const userId = useStoreUserEffect();

  const chatrooms = useQuery(api.chatrooms.list) || [];

  const [newChatroomName, setChatroomName] = useState("");
  const createChatroom = useMutation(api.chatrooms.create);

  async function handleCreateChatroom(event: FormEvent) {
    event.preventDefault();
    await createChatroom({ name: newChatroomName });
    setChatroomName("");
  }

  return (
    <div>
      <h1>Chatrooms</h1>
      <form onSubmit={(e) => handleCreateChatroom(e)}>
        <input
          value={newChatroomName}
          onChange={(event) => setChatroomName(event.target.value)}
          placeholder="Create a chatroom…"
        />
        <input
          type="submit"
          value="Create"
          disabled={newChatroomName === "" || userId === null}
        />
      </form>
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
