function postMessage(parent, args, context, info) {

  return context.prisma.createMessage({
    text: args.text,
    likeCount: 0,
    dislikeCount:0
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

async function setMessageLike(parent, args, context, info) {
  const messageExists = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExists) {
    throw new Error(`Message with ID ${args.messageId} does not exist`);
  }

  return context.prisma.updateMessage({
    where: { id: args.messageId },
    data: {  likeCount: ++args.likeCount }
  });
}

async function setMessageDislike(parent, args, context, info) {
  const messageExists = await context.prisma.$exists.message({
    id: args.messageId
  });

  if (!messageExists) {
    throw new Error(`Message with ID ${args.messageId} does not exist`);
  }
  
  return context.prisma.updateMessage({
    where: { id: args.messageId },
    data: {  dislikeCount: ++args.dislikeCount }
  });
}

module.exports = {
  postMessage,
  postReply,
   setMessageLike,
   setMessageDislike
}