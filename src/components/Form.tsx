import { Box, Tab, Tabs } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";

import FormBody from "./FormBody";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";

export const darkGrey = "#8B959E";
export const lightGrey = "#F8F8F8";
export const purple = "#845EC2";
export const fieldBorder = "#EEEEEE";
export const fieldHeight = "31px";

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
    const watchRef = useRef(null);

    const onTabChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    }, []);


    return (
        <Box sx={{
            paddingLeft: 20,
            paddingRight: 20,
            width: 531,

        }}>
            <Box sx={{
                paddingLeft: "24px",
                paddingRight: "24px",
                backgroundColor: lightGrey,
                height: "126px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                {
                    headerText &&
                    <FormHeader
                        headerText={headerText}
                        onClose={onCloseClick ?? (() => { })}
                    />
                }
                <Tabs
                    sx={{ backgroundColor: lightGrey, borderBottom: "none" }}
                    TabIndicatorProps={{ style: { backgroundColor: purple, width: "81px" } }}
                    value={tabValue}
                    onChange={onTabChange}
                >
                    <Tab label="Configuration" disableRipple sx={{ paddingLeft: 0 }} />
                    <Tab disableRipple sx={{ paddingLeft: 0 }} label={<span>Debug <span style={{ color: `${tabValue === 1 ? "red" : darkGrey}` }}>*</span></span>} />
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