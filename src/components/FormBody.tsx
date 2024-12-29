import { Box } from '@mui/material';
import ConfigurationForm from './ConfigurationForm';
import CustomTabPanel from './CustomTabPanel';
import React from 'react';

interface FormBodyProps {
    value: number;
}

const FormBody = ({ value }: FormBodyProps) => {
    return (
        <Box sx={{ backgroundColor: "white" }}>
            <Box sx={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <CustomTabPanel value={value} index={0}>
                    <ConfigurationForm />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    To be implemented
                </CustomTabPanel>
            </Box>
        </Box>

    );
};

export default FormBody;