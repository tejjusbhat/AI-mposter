import { Id } from "../../convex/_generated/dataModel";

interface ChatroomIconProps {
  name: string;
  creator: string;
  id: Id<"chatrooms">;
}

export default function ChatroomIcon(props: ChatroomIconProps) {
    async function handleClick() {
        console.log(props.id);
    }

  return (
    <div className="chatroomIcon">
      <h1>{props.name}</h1>
      <h2>{props.creator}</h2>
      <button onClick={handleClick}>Join</button>
    </div>
  );
}
