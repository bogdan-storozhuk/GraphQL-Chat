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
  mutation PostMutation($text: String!, $likeCount: Int!,$dislikeCount: Int!) {
    postProduct(text: $text, likeCount: $likeCount,dislikeCount: $dislikeCount) {
      id
      text
      likeCount
      dislikeCount
      reviews {
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
      reviews {
        id
        text
      }
    }
  }
`;