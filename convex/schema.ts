import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  chatrooms: defineTable({
    name: v.string(),
    creatorId: v.id("users"),
    messages: v.array(v.id("messages")),
    gameStatus: v.string(),
  }),
  messages: defineTable({
    senderId: v.id("users"),
    content: v.string(),
    chatroomId: v.id("chatrooms"),
  }).index("by_chatroom", ["chatroomId"]),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  likes: defineTable({
    liker: v.string(),
    messageId: v.id("messages"),
  }).index("byMessageId", ["messageId"]),
});
