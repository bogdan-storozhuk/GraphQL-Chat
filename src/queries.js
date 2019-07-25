import gql from 'graphql-tag';

export const MESSAGE_QUERY = gql`
  query messageQuery($orderBy: MessageOrderByInput) {
    messages(orderBy: $orderBy) {
      count
      messageList {
        id
        text
        likeCount
        dislikeCount
        replies {
          id
          text
        }
      }
    }
  }
`;

export const POST_MESSAGE_MUTATION = gql`
  mutation PostMutation($text: String!) {
    postMessage(text: $text) {
      id
      text
      likeCount
      dislikeCount
      replies {
        id
        text
      }
    }
  }
`;

export const POST_REPLY_MUTATION = gql`
  mutation PostMutation($messageId: ID!, $text: String!) {
    postReply(messageId: $messageId, text: $text) {
      id
      text
    }
  }
`;

export const NEW_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    newMessage {
      id
      text
      likeCount
      dislikeCount
      replies {
        id
        text
      }
    }
  }
`;

export const UPDATE_MESSAGES_SUBSCRIPTION = gql`
  subscription {
    updateMessage {
      id
      text
      likeCount
      dislikeCount
      replies {
        id
        text
      }
    }
  }
`;

export const LIKE_MESSAGE_MUTATION = gql`
  mutation LikeMutation($messageId: ID!,$likeCount: Int!) {
    setMessageLike(messageId: $messageId, likeCount: $likeCount) {
      id
      text
      likeCount
      dislikeCount
      replies {
        id
        text
      }
    }
  }
`;

export const DISLIKE_MESSAGE_MUTATION = gql`
  mutation DislikeMutation($messageId: ID!, $dislikeCount: Int!) {
    setMessageDislike(messageId: $messageId, dislikeCount: $dislikeCount) {
      id
      text
      likeCount
      dislikeCount
      replies {
        id
        text
      }
    }
  }
`;