import * as colour from "../contstants/colourVariables";

import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

import CircleIcon from "@mui/icons-material/Circle";
import CustomIcon from "./CustomCubeIcon";

interface NotificationMessageProps {
    notification: string;
}

const NotificationMessage: FC<NotificationMessageProps> = ({ notification }) => {
    return (
        <Box sx={{ marginTop: "0.938rem", display: "flex", flexDirection: "column", gap: "0.625rem", justifyContent: "flex-start" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton>
                        <CustomIcon sx={{ color: colour.darkGrey, fontSize: "0.875rem" }} />
                    </IconButton>
                    <Typography sx={{ fontSize: "0.75rem", color: colour.darkGrey }}>
                        Application
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: colour.darkGrey, mx: 1 }}>
                        •
                    </Typography>
                    <Typography sx={{ fontSize: "0.75rem", color: colour.darkGrey }}>
                        2 mins ago
                    </Typography>
                </Box>
                <Box>
                    <CircleIcon
                        sx={{
                            color: colour.underlineColour,
                            fontSize: "0.438rem"
                        }}
                    />
                </Box>
            </Box>
            <Box >
                <Typography gutterBottom sx={{ fontSize: "0.875rem", lineHeight: "1.313rem" }}>
                    {notification}
                </Typography>
            </Box>
        </Box>
    );
};

export default NotificationMessage;