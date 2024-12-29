import * as colour from "../contstants/colourVariables";

import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, Typography } from "@mui/material";
import { Control, FieldValues, UseFormSetValue } from "react-hook-form";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React from "react";
import VideoStreamForm from "./VideoStreamForm";

interface FormFieldAccordionProps<T extends FieldValues> {
    summaryTitle: string;
    summaryTitleSuffix?: string;
    expertMode?: boolean;
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    name: string;
}

const FormFieldAccordion = <T extends FieldValues>({
    summaryTitle,
    summaryTitleSuffix,
    expertMode = false,
    control,
    setValue,
    name
}: FormFieldAccordionProps<T>) => {
    return (
        <FormControl fullWidth>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Accordion
                        sx={{
                            boxShadow: "none",
                            fontSize: "0.875rem",
                            backgroundColor: colour.white
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownSharpIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                minHeight: "1.938rem",
                                height: "1.938rem",
                                backgroundColor: colour.lightGrey,
                                borderRadius: "0.188rem",
                                "&.Mui-expanded": {
                                    minHeight: "1.938rem",
                                    height: "1.938rem",
                                },
                            }}
                        >
                            <Typography component="span" sx={{ fontSize: "0.875rem", color: colour.darkGrey, }}>{summaryTitle}</Typography>
                            {
                                !!summaryTitleSuffix && <Typography component="span" sx={{ fontSize: "0.875rem", padding: "0 0.063rem" }}> - {summaryTitleSuffix}</Typography> //TODO: spacing issue 
                            }
                        </AccordionSummary>
                        <AccordionDetails sx={{ marginTop: "0.938rem", borderLeft: `0.125rem solid ${colour.fieldBorder}` }}>
                            <VideoStreamForm
                                expertMode={expertMode}
                                control={control}
                                setValue={setValue}
                                name={name}
                            />
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </FormControl>
    );
};

export default FormFieldAccordion;