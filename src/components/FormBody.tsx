import React, { FC } from "react";

import { Box } from "@mui/material";
import ConfigurationForm from "./ConfigurationForm";
import TabPanel from "../common/TabPanel";
import { white } from "../contstants/colourVariables";

interface FormBodyProps {
    value: number;
}

const FormBody: FC<FormBodyProps> = ({ value }) => {
    return (
        <Box sx={{ backgroundColor: white }}>
            <Box sx={{ pl: "1.5rem", pr: "1.5rem" }}>
                <TabPanel value={value} index={0}>
                    <ConfigurationForm />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    To be implemented
                </TabPanel>
            </Box>
        </Box>

    );
};

export default FormBody;