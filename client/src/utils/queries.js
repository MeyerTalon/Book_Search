import { gql } from '@apollo/client';

export const GET_ME = gql`
   {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                author
                image
                description
                title
                link
            }
        }
    }
`;