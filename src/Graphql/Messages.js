import gql from "graphql-tag";

export const NEW_MESSAGE = gql`
  mutation newMessage($input: CreateMessageInput!) {
    newMessage(input: $input) {
      message
    }
  }
`;

export const RECENT_PHYSICIAN_MESSAGE = gql`
  query getRecentPrescriptionMessage($prescriptionId: String!) {
    getRecentPrescriptionMessage(prescriptionId: $prescriptionId) {
      id
      text
    }
  }
`;

export const GET_PATIENT_MESSAGES = gql`
  query {
    getPatientMessages {
      id
      text
      createdAt
      user {
        firstName
        lastName
      }
      prescription {
        id
        type
      }
    }
  }
`;

export const GET_MESSAGES = gql`
  query getMessages($prescriptionId: String!) {
    getMessagesByPrescription(prescriptionId: $prescriptionId) {
      id
      text
      createdAt
      private
      read
      user {
        id
        firstName
        lastName
      }
      physician {
        id
      }
    }
  }
`;
