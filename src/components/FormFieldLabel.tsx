import { Box, FormLabel, Tooltip } from "@mui/material";
import { darkGrey, white } from "../contstants/colourVariables";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

type TooltipPosition = "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top";

export interface FormFieldLabelProps {
    labelText: string;
    required?: boolean;
    tooltipTitle?: string;
    tooltipPosition?: TooltipPosition;
}

const FormFieldLabel = ({ labelText, required = false, tooltipPosition = "top", tooltipTitle }: FormFieldLabelProps) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <FormLabel component="legend" >
                {labelText}
                {required && <span style={{ color: darkGrey }}>*</span>}
            </FormLabel>
            <Tooltip title={tooltipTitle} placement={tooltipPosition}>
                <InfoOutlinedIcon sx={{ color: darkGrey, height: "0.875rem", width: "0.875rem", strokeWidth: 1, stroke: white }} />
            </Tooltip>
        </Box>
    );
};

export default FormFieldLabel;