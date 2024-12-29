import { Box, FormControlProps } from '@mui/material';
import React, { FC } from 'react';

interface SectionWrapperProps extends FormControlProps {
    children: React.ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, sx }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
                ...sx
            }}>
            {children}
        </Box>
    );
};

export default SectionWrapper;