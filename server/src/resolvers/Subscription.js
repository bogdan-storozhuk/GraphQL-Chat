function newMessageSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.message({
        mutation_in: ['CREATED']
    }).node();
}

const newMessage = {
    subscribe: newMessageSubscribe,
    resolve: payload => {
        return payload;
    }
};

function updateMessageSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.message({
        mutation_in: ['UPDATED']
    }).node();
}

const updateMessage = {
    subscribe: updateMessageSubscribe,
    resolve: payload => {
        return payload;
    }
};


module.exports = {
    newMessage,
    updateMessage
};