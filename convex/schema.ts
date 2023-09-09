import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  chatrooms: defineTable({
    name: v.string(),
    messages: v.array(v.id("messages")),
  }),
  messages: defineTable({
    senderId: v.id("users"),
    content: v.string(),
  }),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),
  likes: defineTable({
    liker: v.string(),
    messageId: v.id("messages"),
  }).index("byMessageId", ["messageId"]),
});
