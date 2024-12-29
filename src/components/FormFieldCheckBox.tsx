import * as colour from "../contstants/colourVariables";

import { Box, Checkbox, FormControl } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormFieldLabel, { FormFieldLabelProps } from "./FormFieldLabel";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import React from "react";

interface FormFieldCheckboxProps<T extends FieldValues> extends FormFieldLabelProps {
    expertMode?: boolean;
    control: Control<T, any>;
    name: Path<T>;
}

const FormFieldCheckbox = <T extends FieldValues>({
    tooltipTitle,
    required,
    labelText,
    tooltipPosition,
    expertMode = false,
    control,
    name
}: FormFieldCheckboxProps<T>) => {
    if (!required || (required && expertMode)) {
        return (
            <FormControl fullWidth>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    <Controller
                        name={name}
                        control={control}
                        render={({ field }) => (
                            <Checkbox
                                {...field}
                                value={field.value}
                                checked={field.value}
                                onChange={field.onChange}
                                disableRipple
                                checkedIcon={<CheckBoxIcon />}
                                sx={{
                                    padding: 0,
                                    color: colour.darkGrey,
                                    stroke: colour.white,
                                    strokeWidth: 1,
                                    "&.Mui-checked": {
                                        color: colour.purple,
                                    },
                                    "& .MuiSvgIcon-root": {
                                        transform: "scale(0.95)",
                                    },
                                }}
                            />
                        )}
                    />
                    <FormFieldLabel
                        labelText={labelText}
                        required={required}
                        tooltipPosition={tooltipPosition}
                        tooltipTitle={tooltipTitle}
                    />
                </Box>
            </FormControl>
        );
    }

    return <></>;
};

export default FormFieldCheckbox;