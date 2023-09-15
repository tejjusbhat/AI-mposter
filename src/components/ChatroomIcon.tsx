import { Id } from "../../convex/_generated/dataModel";
import { useNavigate } from "react-router-dom";

interface ChatroomIconProps {
  name: string;
  creator: string;
  id: Id<"chatrooms">;
}

export default function ChatroomIcon(props: ChatroomIconProps) {
  const navigate = useNavigate();

  return (
    <div className="chatroomIcon">
      <div>
        <span>{props.name}</span>
        <span>{props.creator}</span>
      </div>
      <button
        onClick={() => {
          navigate(`/chatrooms/${props.id}`);
        }}
      >
        Join
      </button>
    </div>
  );
}
