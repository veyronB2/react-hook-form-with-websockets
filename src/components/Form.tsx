import * as colour from "../contstants/colourVariables";

import { Box, Tab, Tabs } from "@mui/material";
import React, { useCallback, useState } from "react";

import FormBody from "./FormBody";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

interface FormProps {
    headerText?: string;
    footer?: boolean;
    onCloseClick?: () => void;
}

const onDeleteClick = () => {
    console.log("Delete Clicked");
};

const onCancelClick = () => {
    console.log("Cancel Clicked");
};

const onApplyClick = () => {
    console.log("Apply Clicked");
};

const Form = ({ headerText, footer = false, onCloseClick }: FormProps) => {
    const [tabValue, setTabValue] = useState<number>(0);

    const onTabChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }, []);


    return (
        <Box sx={{
            pl: "1.25rem",
            pr: "1.25rem",
            width: "33.188rem",

        }}>
            <Box sx={{
                pl: "1.5rem",
                pr: "1.5rem",
                backgroundColor: colour.lightGrey,
                height: "7.875rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                {
                    headerText &&
                    <FormHeader
                        headerText={headerText}
                        onClose={onCloseClick}
                    />
                }
                <Tabs
                    sx={{ backgroundColor: colour.lightGrey, borderBottom: "none" }}
                    TabIndicatorProps={{ style: { backgroundColor: colour.purple, width: "5.063rem" } }}
                    value={tabValue}
                    onChange={onTabChange}
                >
                    <Tab label="Configuration" disableRipple sx={{ pl: 0 }} />
                    <Tab disableRipple sx={{ pl: 0 }} label={<span>Debug <span style={{ color: colour.darkGrey }}>*</span></span>} />
                </Tabs>
            </Box>
            <FormBody
                value={tabValue}
            />
            {
                footer &&
                <FormFooter
                    onDelete={onDeleteClick}
                    onCancel={onCancelClick}
                    onApply={onApplyClick}
                />
            }
        </Box>
    );
};

export default Form;