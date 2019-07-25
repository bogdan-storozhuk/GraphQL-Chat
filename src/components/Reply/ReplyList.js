import React, { useState } from 'react';
import ReplyItem from './ReplyItem';
import ReplyForm from './ReplyForm';

const ReplyList = props => {
    const [showReplyForm, toggleForm] = useState(false);
    const { messageId, replies } = props;
    
    return (
        <div className="reply-wrapper">
            <div className="reply-list">
            {replies.map(item => {
                return <ReplyItem key={item.id} {...item} />
            })}
            </div>
            <button className="reply-button" onClick={() => toggleForm(!showReplyForm)}>
                {showReplyForm ? 'Close reply' : 'Add reply'}
            </button>
  
            {showReplyForm && <ReplyForm
                messageId={messageId}
                toggleForm={toggleForm}
            />}
       
        </div>
    );
}

export default ReplyList;