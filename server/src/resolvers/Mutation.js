function postMessage(parent, args, context, info) {
  return context.prisma.createMessage({
    text: args.text,
    likeCount: args.likeCount,
    dislikeCount:args.dislikeCount
  });
}

async function postReply(parent, args, context, info) {
  const messageExists = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExists) {
    throw new Error(`Message with ID ${args.messageId} does not exist`);
  }

  return context.prisma.createReply({
    text: args.text,
    message: { connect: { id: args.messageId } }
  });
}
// async function setMessageLike(parent, args, context, info) {
//   const messageExists = await context.prisma.$exists.message({
//     id: args.messageId
//   });
//   if (!messageExists) {
//     throw new Error(`Message with ID ${args.messageId} does not exist`);
//   }
//   return context.prisma.updateMessage({
//     likeCount: args.likeCount++,
//     message: { connect: { id: args.messageId } }
//   });
// }

module.exports = {
  postMessage,
  postReply,
  // setMessageLike
}