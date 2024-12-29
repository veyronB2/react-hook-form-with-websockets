import { Box, Button } from "@mui/material";
import React, { FC } from "react";
import { lightGreen, lightGrey, white } from "../contstants/colourVariables";

import { getButtonStyles } from "../utilities/utils";

interface FormFooterProps {
    onDelete: () => void;
    onCancel: () => void;
    onApply: () => void;
}

const FormFooter: FC<FormFooterProps> = ({ onDelete, onCancel, onApply }) => {
    return (
        <Box sx={{
            paddingLeft: "1.5rem",
            height: "4.125rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `0.125rem solid ${lightGrey}`,
            background: white,
        }}>

            <Button
                disableRipple
                onClick={onDelete}
                sx={getButtonStyles()}
            >
                Delete
            </Button>

            <Box>
                <Button
                    disableRipple
                    onClick={onCancel}
                    sx={getButtonStyles()}
                >
                    Cancel
                </Button>
                <Button
                    disableRipple
                    onClick={onApply}
                    sx={getButtonStyles({ btnColour: lightGreen })}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
};

export default FormFooter;