import React from 'react';
import ReplyList from '../Reply/ReplyList';

const MessageItem = props => {
  const { id, title, price, replies } = props;
  
  return (
    <div className="product-item">
      <div className="title-wrapper">
        <h2>{title}</h2>
        <span>{price} ₴</span>
      </div>
      <ReplyList messageId={id} replies={replies} />
    </div>
  );
};

export default MessageItem;