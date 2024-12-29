import { ApolloProvider, useMutation } from '@apollo/client';
import { Box, CardContent, Card as CardMui, Tab, Tabs } from '@mui/material';
import { PUBLISH_NOTIFICATION, client, getNotificationMessages } from '../utilities/utils';
import React, { useCallback, useEffect, useState } from 'react';

import CustomTabPanel from './CustomTabPanel';
import NotificationMessage from './NotificationMessage';
import NottificationSettings from './NottificationSettings';
import { websocketParam } from '../contstants/contstants';

const underlineColour = "#FF6F91";

interface ServerResponse {
    sid: string;
    upgrades: string[];
    pingInterval: number;
    pingTimeout: number;
}

const Websocket = () => {
    const [tabValue, setTabValue] = useState<number>(0);
    const [publishNotification] = useMutation(PUBLISH_NOTIFICATION);
    const [notificationMessages, setNotificationMessaged] = useState<string[]>([]);

    useEffect(() => {
        const socket = new WebSocket(websocketParam);

        socket.onopen = (event) => {
            console.log('Connection established:', event);
        };

        socket.onmessage = (event: MessageEvent<any>) => {
            if (event.data.startsWith("42")) {
                const payload = event.data.substring(2);
                const parsedPayload = JSON.parse(payload);
                const messages = getNotificationMessages(parsedPayload);
                setNotificationMessaged(messages);
            }
            if (event.data.startsWith("0")) {
                const payload = event.data.substring(1);
                const parsedData: ServerResponse = JSON.parse(payload);
                const sid = parsedData.sid;

                if (sid) {
                    publishNotification({
                        variables: {
                            socketId: sid,
                            workspaceId: "672b948eeaef2900179a57bc",
                            message: "task_testing",
                            payload: "{\"message\":\"hello\"}"
                        }
                    })
                        .then(response => {
                            console.log("GraphQL response", response);
                        })
                        .catch(error => {
                            console.log("GraphQL error", error);
                        });
                }
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = (event) => {
            console.log('Connection closed:', event);
        };

        return () => {
            socket.close();
        };
    }, [publishNotification]);

    const onTabChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }, []);

    return (
        <CardMui elevation={0} sx={{ width: "330px", borderRadius: 0 }}>
            <CardContent style={{ padding: 30 }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        onChange={onTabChange}
                        value={tabValue}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: underlineColour,
                                width: "81px",
                            }
                        }}
                    >
                        <Tab label="Notifications" disableRipple sx={{ textTransform: "none", paddingLeft: 0 }} />
                        <Tab label="Settings" disableRipple sx={{ textTransform: "none", paddingLeft: 0 }} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={tabValue} index={0}>
                    {
                        notificationMessages.map(notification => (
                            <NotificationMessage key={notification} notification={notification} />
                        ))
                    }
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                    <NottificationSettings />
                </CustomTabPanel>
            </CardContent>
        </CardMui>
    );
};

const WebSocketConnection = () => (
    <ApolloProvider client={client}>
        <Websocket />
    </ApolloProvider>
);

export default WebSocketConnection;