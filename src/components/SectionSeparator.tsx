import { FormControl, Typography } from '@mui/material';

import React from 'react';

interface SectionSeparatorProps {
    text: string;
}

const SectionSeparator = ({ text }: SectionSeparatorProps) => {
    return (
        <FormControl fullWidth>
            <Typography sx={{ fontWeight: "500", fontSize: "14px", color: "#444444", marginTop: "20px" }}>
                {text}
            </Typography>
        </FormControl>
    );
};

export default SectionSeparator;