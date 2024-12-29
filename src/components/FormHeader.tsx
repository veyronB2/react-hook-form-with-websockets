import { Box, IconButton, Typography } from '@mui/material';
import { darkGrey, lightGrey } from './Form';

import CloseIcon from "@mui/icons-material/Close";
import React from 'react';

interface FormHeaderProps {
    headerText: string;
    onClose: () => void;
}

const FormHeader = ({ headerText, onClose }: FormHeaderProps) => {
    return (
        <Box
            sx={{
                backgroundColor: lightGrey,
                color: darkGrey,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "40px"
            }}
        >
            <Typography sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "20px" }}>
                {headerText}
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="close" onClick={onClose}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
};

export default FormHeader;