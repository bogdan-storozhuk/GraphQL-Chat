import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import { POST_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../queries';

const MessageForm = props => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const _updateStoreAfterAddingMessage = (store, newMessage) => {
    const orderBy = 'createdAt_DESC';
    const data = store.readQuery({
      query: MESSAGE_QUERY,
      variables: {
        orderBy
      }
    });
    data.messages.messageList.unshift(newMessage);
    store.writeQuery({
      query: MESSAGE_QUERY,
      data,
    });
  };

  return (
    <div className="form-wrapper">
      <div className="input-wrapper">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      </div>

      <Mutation
        mutation={POST_MESSAGE_MUTATION}
        variables={{ title, price: parseFloat(price) }}
        update={(store, { data: { postMessage } }) => {
          _updateStoreAfterAddingMessage(store, postMessage);
        }}
        onCompleted={() => props.history.push('/')}
      >
        {postMutation =>
          <button className="post-button" onClick={postMutation}>Add</button>
        }
      </Mutation>
    </div>
  );
};

export default MessageForm;