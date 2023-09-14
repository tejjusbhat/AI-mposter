import { v } from "convex/values";
import { query } from "./_generated/server";
import { mutation } from "./_generated/server";

export const create = mutation({
  args: { name: v.string() },
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

    await ctx.db.insert("chatrooms", {
      name: args.name,
      creatorId: user._id,
      gameStatus: "waiting",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    const chatrooms = await ctx.db.query("chatrooms").order("asc").take(100);

    if (!chatrooms) {
      throw new Error("Chatroom not found");
    }

    return Promise.all(
      chatrooms.map(async (chatroom) => {
        const creator = await ctx.db.get(chatroom.creatorId);
        return {
          creator: creator!.name,
          chatroomId: chatroom._id,
          name: chatroom.name,
        };
      })
    );
  },
});

export const getChatroom = query({
  args: { chatroomId: v.string() },
  handler: async (ctx, args) => {
    const chatroom = await ctx.db
      .query("chatrooms")
      .filter((q) => q.eq(q.field("_id"), args.chatroomId))
      .unique();

    if (!chatroom) {
      throw new Error("Chatroom not found");
    }

    const creator = await ctx.db.get(chatroom.creatorId);

    return {
      creator: creator!.name,
      chatroomId: chatroom._id,
      name: chatroom.name,
    };
  },
});
