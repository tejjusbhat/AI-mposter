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
    <form onSubmit={(e) => handleSendMessage(e)}>
      <input
        value={newMessageText}
        onChange={(event) => setNewMessageText(event.target.value)}
        placeholder="Write a message…"
      />
      <input
        type="submit"
        value="Send"
        disabled={newMessageText === "" || userId === null}
      />
    </form>
  )
}