import React from 'react';
import { Mutation } from 'react-apollo';
import { LIKE_MESSAGE_MUTATION, MESSAGE_QUERY } from '../../../queries';

const LikeButton =({likeCount, messageId}) => {
    return (
    <Mutation
    mutation={LIKE_MESSAGE_MUTATION}
    variables={{ likeCount, messageId}}
  >
    {likeMutation =>
    
      <button  onClick ={likeMutation} type="button" className="user-likeButton">{likeCount}</button>
    }
  </Mutation>);
}

export default LikeButton