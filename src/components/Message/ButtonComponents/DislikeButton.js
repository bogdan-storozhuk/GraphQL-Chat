import React from 'react';
import { Mutation } from 'react-apollo';
import { DISLIKE_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../../queries';

const DislikeButton =({dislikeCount, messageId}) => {
    return (
    <Mutation
    mutation={DISLIKE_MESSAGE_MUTATION}
    variables={{ dislikeCount, messageId}}
  >
    {dislikeMutation =>
    
      <button  onClick ={dislikeMutation} type="button" className="user-dislikeButton">{dislikeCount}</button>
    }
  </Mutation>);
}

export default DislikeButton;