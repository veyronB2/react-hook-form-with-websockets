import { ApolloClient, InMemoryCache, createHttpLink, gql } from "@apollo/client";
import { authBearer, uirUrl } from "../contstants/contstants";

import { darkGrey } from "../components/Form";
import { setContext } from "@apollo/client/link/context";

interface ButtonStylesProps {
    btnColour?: string;
    fontSize?: string;
}
export const getButtonStyles = ({ btnColour = darkGrey, fontSize = "14px" }: ButtonStylesProps = {}) => {
    return {
        padding: 0,
        textTransform: 'none',
        fontSize: fontSize,
        color: btnColour,
        "&:hover": { backgroundColor: "transparent" }
    };
};

export interface Notification {
    message: string;
    payload: string;
}

//TODO unit test
export const getNotificationMessages = (data: (string | Notification)[]) => {
    const messages = data
        .filter((item): item is Notification => typeof item === 'object' && item !== null && 'message' in item)
        .map(item => item.message);
    return messages;
};

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