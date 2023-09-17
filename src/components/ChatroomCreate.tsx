import { FormEvent, useState } from "react";
import { useMutation } from "convex/react";
import useStoreUserEffect from "../useStoreUserEffect";
import { api } from "../../convex/_generated/api";

interface ChatroomCreateProps {
  goBack: (e: FormEvent) => void;
}

export default function ChatroomCreate(props: ChatroomCreateProps) {
  const userId = useStoreUserEffect();

  const [newChatroomName, setChatroomName] = useState("");
  const createChatroom = useMutation(api.chatrooms.create);

  async function handleCreateChatroom(event: FormEvent) {
    event.preventDefault();
    await createChatroom({ name: newChatroomName });
    setChatroomName("");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length <= 12) {
      setChatroomName(event.target.value);
    }
  }

  return (
    <div
      className="chatroomCreate"
      onClick={(e) => {
        props.goBack(e);
      }}
    >
      <div className="formWrapper">
        <span>Create Chatroom</span>
        <form onSubmit={(e) => {
          handleCreateChatroom(e);
          props.goBack(e);
          }}>
          <input
            type="text"
            value={newChatroomName}
            onChange={(event) => handleChange(event)}
          />
          <button
            type="submit"
            value="Create"
            disabled={newChatroomName === "" || userId === null}
          >
            Create
          </button>
        </form>
        <button
          className="cancelButton"
          onClick={(e) => {
            props.goBack(e);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
