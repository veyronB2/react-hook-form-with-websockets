import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

export const websocketParam = "wss://notification.dev.viso.ai/socket.io/?EIO=3&transport=websocket";
export const uirUrl = "https://dev.viso.ai/api/notification/graphql";
export const authBearer = "Bearer eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjR2aEkxMmtTVTdVQTRkd2hqLWpJSkluVTBtTUYxX1R0NzY1QTZYVUdiQmMifQ.eyJpZCI6IjY3NjU0ZGRjYTk5OTJiMDAxN2ZkMjQ4OCIsInR5cGUiOiJ3b3Jrc3BhY2UiLCJ3b3Jrc3BhY2VJZCI6IjY3MmI5NDhlZWFlZjI5MDAxNzlhNTdiYyIsInVzZXJQcm9maWxlSWQiOiI2NzY1NGRkY2E5OTkyYjAwMTdmZDI0OGEiLCJzdWJEb21haW4iOiI2NzJiOTQ4ZWVhZWYyOTAwMTc5YTU3YmMiLCJzdWIiOiI2NzY1NGRkY2E5OTkyYjAwMTdmZDI0ODgiLCJpc3MiOiJ2aXNvLmFpIiwiZXhwIjoxNzM2MTgyMzU0LCJpYXQiOjE3MzQ5NzI3NTR9.u_CRZCzaoaFWd2VwWNy-wDeabLpuSy5gNjZdfk-SqBjrhY9k2lG-tvikZZKhfqsBW2mDq9P_BXILy6PZ1qd9BldaVDWhj_KTFwKr6g3hlckx4VRiDa75qTQ0P3b6TrsQ9HFOVJHYfqIZab9_0Va2NBcJv91ho8WTDZ287l_lJueA2JDl4B_K-ICArpcZoz3ptfjC7Aw_iUum_Lt-dKlfohT60RhG_BsT_R8P1A5l8WUWPjiOjp-k19UyPgQm2yGVODxj7wTq-yUQdMlh57Z8W-EG7TD2iioisHEoyEiUPYCWaj9pb1DTK0tMPTLxLSLW4375Jyw03NfPEHfMlum_2g";

export const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: authBearer
        }
    };
});

export const httpLink = createHttpLink({
    uri: uirUrl
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export const PUBLISH_NOTIFICATION = gql`
    mutation PublishNotification($socketId: String!, $workspaceId: String!, $message: String!, $payload: String!) {
        publishNotification(
            socketId: $socketId,
            workspaceId: $workspaceId,
            message: $message,
            payload: $payload
        ) 
    }
`;
