import { FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import useStoreUserEffect from "../useStoreUserEffect";
import { api } from "../../convex/_generated/api";

export default function ChatroomCreate() {
  const userId = useStoreUserEffect();

  const [newChatroomName, setChatroomName] = useState("");
  const createChatroom = useMutation(api.chatrooms.create);

  async function handleCreateChatroom(event: FormEvent) {
    event.preventDefault();
    await createChatroom({ name: newChatroomName });
    setChatroomName("");
  }

  return (
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
  )

}