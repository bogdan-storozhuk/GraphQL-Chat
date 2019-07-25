import React from 'react';
import ReplyList from '../Reply/ReplyList';
import DislikeButton from './ButtonComponents/DislikeButton';
import LikeButton from './ButtonComponents/LikeButton';

const MessageItem = props => {
  
  const { id, text, likeCount, dislikeCount,replies } = props;
  
  return (
      <div className="message">
          <p className="user-message">{text}</p>
          <p className="message-number">12</p>
          <DislikeButton  messageId={id} dislikeCount ={dislikeCount} />
          <LikeButton  messageId={id} likeCount ={likeCount} />
          <ReplyList messageId={id} replies={replies} />
    </div>
  );
};

export default MessageItem;