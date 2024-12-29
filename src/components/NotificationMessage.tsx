import { Box, IconButton, Typography } from '@mui/material';

import CircleIcon from '@mui/icons-material/Circle';
import CustomIcon from './CustomCubeIcon';
import React from 'react';

interface NotificationMessageProps {
    notification: string;
}

const NotificationMessage = ({ notification }: NotificationMessageProps) => {
    return (
        <Box sx={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <CustomIcon style={{ color: "#8B959E", fontSize: "14px" }} />
                    </IconButton>
                    <Typography sx={{ fontSize: "12px", color: "#8B959E" }}>
                        Application
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#8B959E", mx: 1 }}>
                        •
                    </Typography>
                    <Typography sx={{ fontSize: "12px", color: "#8B959E" }}>
                        2 mins ago
                    </Typography>
                </Box>
                <Box>
                    <CircleIcon
                        sx={{
                            color: "#FF6F91",
                            fontSize: "7px"
                        }}
                    />
                </Box>
            </Box>
            <Box >
                <Typography gutterBottom sx={{ fontSize: "14px", lineHeight: "21px" }}>
                    {notification}
                </Typography>
            </Box>
        </Box>
    );
};

export default NotificationMessage;