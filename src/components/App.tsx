import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function App() {
  const chatrooms = useQuery(api.chatrooms.list) || [];
  const chatroom = chatrooms[0];
  console.log(chatroom);
  
}
