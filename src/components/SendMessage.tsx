import { FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";
import useStoreUserEffect from "../useStoreUserEffect";

export default function SendMessage(props: {chatroomId: Id<"chatrooms">}) {
  const userId = useStoreUserEffect();

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation(api.messages.send);

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    await sendMessage({ body: newMessageText, chatroomId: props.chatroomId});
    setNewMessageText("");
  }

  return (
    <div className="messageSend">
      <form onSubmit={(e) => handleSendMessage(e)}>
      <input
        type="text"
        value={newMessageText}
        onChange={(event) => setNewMessageText(event.target.value)}
        placeholder="Write a message…"
      />
      <button
        type="submit"
        disabled={newMessageText === "" || userId === null}>
        {"SEND"}
      </button>
    </form>
    </div>
  )
}