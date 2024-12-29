import { Box, FormLabel, Tooltip } from '@mui/material';

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from 'react';
import { darkGrey } from './Form';

export interface FormFieldLabelProps {
    labelText: string;
    required?: boolean;
    tooltipTitle?: string;
    tooltipPosition?: | 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
}

const FormFieldLabel = ({ labelText, required = false, tooltipPosition = "top", tooltipTitle }: FormFieldLabelProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <FormLabel component="legend" >
                {labelText}
                {required && <span style={{ color: darkGrey }}>*</span>}
            </FormLabel>
            <Tooltip title={tooltipTitle} placement={tooltipPosition}>
                <InfoOutlinedIcon sx={{ color: darkGrey, height: "14px", width: "14px", strokeWidth: 1, stroke: "#ffffff" }} />
            </Tooltip>
        </Box>
    );
};

export default FormFieldLabel;