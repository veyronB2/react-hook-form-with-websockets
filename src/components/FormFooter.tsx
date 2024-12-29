import { Box, Button } from '@mui/material';

import React from 'react';
import { getButtonStyles } from '../utilities/utils';
import { lightGrey } from './Form';

interface FormFooterProps {
    onDelete: () => void;
    onCancel: () => void;
    onApply: () => void;
}

const FormFooter = ({ onDelete, onCancel, onApply }: FormFooterProps) => {
    return (
        <Box sx={{
            paddingLeft: "24px",
            height: "66px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `2px solid ${lightGrey}`,
            background: "white",
        }}>

            <Button
                disableRipple
                onClick={onDelete}
                sx={getButtonStyles()}
                style={{ justifyContent: "flex-start" }}
            >
                Delete
            </Button>

            <Box>
                <Button
                    disableRipple
                    onClick={onCancel}
                    sx={getButtonStyles()}
                    style={{ justifyContent: "flex-start" }}
                >
                    Cancel
                </Button>
                <Button
                    disableRipple
                    onClick={onApply}
                    sx={getButtonStyles({ btnColour: "#81C07B" })}
                    style={{ justifyContent: "flex-start" }}
                >
                    Apply
                </Button>
            </Box>
        </Box>
    );
};

export default FormFooter;