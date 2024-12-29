import { Accordion, AccordionDetails, AccordionSummary, Box, FormControl, Typography } from '@mui/material';
import { Control, FieldValues, UseFormSetValue } from 'react-hook-form';
import { darkGrey, fieldBorder, lightGrey } from './Form';

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React from 'react';
import VideoStreamForm from './VideoStreamForm';

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
                        style={{
                            boxShadow: "none",
                            fontSize: "14px",
                            backgroundColor: "white"
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<KeyboardArrowDownSharpIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            style={{ backgroundColor: lightGrey, }}
                            sx={{
                                minHeight: "31px",
                                height: "31px",

                                borderRadius: "3px",
                                "&.Mui-expanded": {
                                    minHeight: "31px",
                                    height: "31px",
                                },
                            }}
                        >
                            <Typography component="span" style={{ fontSize: "14px", color: darkGrey, }}>{summaryTitle}</Typography>
                            {
                                !!summaryTitleSuffix && <Typography component="span" style={{ fontSize: "14px", padding: "0 1px" }}> - {summaryTitleSuffix}</Typography> //TODO: spacing issue 
                            }
                        </AccordionSummary>
                        <AccordionDetails style={{ marginTop: "15px", borderLeft: `2px solid ${fieldBorder}` }}>
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