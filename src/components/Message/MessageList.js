import React from 'react';
import { Query } from 'react-apollo';
import MessageItem from './MessageItem';
import { MESSAGE_QUERY, NEW_MESSAGES_SUBSCRIPTION, UPDATE_MESSAGES_SUBSCRIPTION} from '../../queries';

const MessageList = props => {
  const orderBy = 'createdAt_DESC';

  const _subscribeToNewMessages = subscribeToMore => {
    subscribeToMore({
      document: NEW_MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { newMessage } = subscriptionData.data;
        const exists = prev.messages.messageList.find(({ id }) => id === newMessage.id);
        if (exists) return prev;

        return {...prev, messages: {
          messageList: [newMessage, ...prev.messages.messageList],
          count: prev.messages.messageList.length + 1,
          __typename: prev.messages.__typename
        }};
      }
    });
  };

  const _subscribeToUpdateMessages = subscribeToMore => {
    subscribeToMore({
      document: UPDATE_MESSAGES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const { updateMessage } = subscriptionData.data;
        const existMessage = prev.messages.messageList.find(({ id, dislikeCount, likeCount }) => 
        id === updateMessage.id 
        && updateMessage.likeCount === likeCount  
        && updateMessage.dislikeCount === dislikeCount);
        if (existMessage) return prev;

        const index = prev.messages.messageList.findIndex(item => item.id === updateMessage.id);

        return {...prev, messages: {
          messageList: [...prev.messages.messageList.slice(0,index),
          updateMessage,
          ...prev.messages.messageList.slice(index + 1)],
          count: prev.messages.messageList.length + 1,
          __typename: prev.messages.__typename
        }};
      }
    });
  };

  return (
    <Query query={MESSAGE_QUERY} variables={{ orderBy }}>
      {({ loading, error, data, subscribeToMore }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Fetch error</div>;
        _subscribeToNewMessages(subscribeToMore);
        _subscribeToUpdateMessages(subscribeToMore);
        const { messages: { messageList } } = data;

        return (
          <div className="message-list">
            {messageList.map(item => {
              return <MessageItem key={item.id} {...item} />
            })}
          </div>
        );
      }}
    </Query>
  );
};

export default MessageList;