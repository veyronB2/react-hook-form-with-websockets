import { Box, FormControl, TextField, TextFieldVariants } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormFieldLabel, { FormFieldLabelProps } from "./FormFieldLabel";

import React from "react";

interface FormFieldTextProps<T extends FieldValues> extends FormFieldLabelProps {
    control: Control<T, any>;
    variant?: TextFieldVariants;
    margin?: "dense" | "normal" | "none";
    expertMode?: boolean;
    name: Path<T>;
    placeholder?: string;
}

const TextInput = <T extends FieldValues>({
    variant = "outlined",
    tooltipTitle,
    required,
    labelText,
    tooltipPosition,
    expertMode = true,
    control,
    name,
    placeholder
}: FormFieldTextProps<T>) => {
    if (!required || (required && expertMode)) {
        return (
            <FormControl fullWidth>
                <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                    {
                        tooltipTitle &&
                        <FormFieldLabel
                            labelText={labelText}
                            required={required}
                            tooltipPosition={tooltipPosition}
                            tooltipTitle={tooltipTitle}
                        />
                    }
                    <div>
                        <Controller
                            control={control}
                            name={name}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    placeholder={placeholder}
                                    variant={variant}
                                    type="text"
                                />
                            )}
                        />
                    </div>
                </Box>
            </FormControl>
        );
    }
    return <></>;
};

export default TextInput;