import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";
import { darkGrey, lightGrey } from "../contstants/colourVariables";

import CloseIcon from "@mui/icons-material/Close";
import { fontWeight } from "../contstants/styles";

interface FormHeaderProps {
    headerText: string;
    onClose?: () => void;
}

const FormHeader: FC<FormHeaderProps> = ({ headerText, onClose }) => {
    return (
        <Box
            sx={{
                backgroundColor: lightGrey,
                color: darkGrey,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "2.5rem"
            }}
        >
            <Typography sx={{ fontWeight: fontWeight.bolder, fontSize: "1rem", lineHeight: "1.25rem" }}>
                {headerText}
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="close" onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
};

export default FormHeader;