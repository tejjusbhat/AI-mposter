import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const send = mutation({
  args: { body: v.string(), chatroomId: v.id("chatrooms") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to mutation");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new Error("Unauthenticated call to mutation");
    }

    await ctx.db.insert("messages", {
      content: args.body,
      senderId: user._id,
      chatroomId: args.chatroomId,
    });
  },
});

export const list = query({
  args: { chatroomId: v.id("chatrooms") },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_chatroom", (q) => q.eq("chatroomId", args.chatroomId))
      .order("asc")
      .take(100);

    return Promise.all(
      messages.map(async (message) => {
        const likes = await ctx.db
          .query("likes")
          .withIndex("byMessageId", (q) => q.eq("messageId", message._id))
          .collect();
        const user = await ctx.db.get(message.senderId);
        return {
          sender: user!.name,
          ...message,
          likes: likes.length,
        };
      })
    );
  },
});

export const like = mutation({
  args: { messageId: v.id("messages") },
  handler: async (ctx, { messageId }) => {
    // Save a user's "like" of a particular message
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthenticated call to mutation");
    }
    const user = await ctx.db
      .query("users")
      .withIndex("by_token", (q) =>
        q.eq("tokenIdentifier", identity.tokenIdentifier)
      )
      .unique();
    if (!user) {
      throw new Error("Unauthenticated call to mutation");
    }
    const likes = await ctx.db
      .query("likes")
      .withIndex("byMessageId", (q) => q.eq("messageId", messageId))
      .collect();

    let flag: boolean = false;
    likes.forEach(async (like) => {
      if (like.liker === user.name) {
        flag = true;
        await ctx.db.delete(like._id);
      }
    });
    if (flag === false) {
      await ctx.db.insert("likes", { liker: user.name, messageId: messageId });
    }
  },
});
