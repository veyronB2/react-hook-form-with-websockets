import * as colour from "../contstants/colourVariables";

import { Box, FormControl, MenuItem, Select, TextFieldVariants } from "@mui/material";
import { Control, Controller, FieldValues, Path, UseFormSetValue } from "react-hook-form";
import FormFieldLabel, { FormFieldLabelProps } from "./FormFieldLabel";

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React from "react";

interface FormFieldSelectProps<T extends FieldValues> extends FormFieldLabelProps {
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    options: string[];
    variant?: TextFieldVariants;
    expertMode?: boolean;
    tagOptions?: boolean;
    name: Path<T>;
}

const SelectInput = <T extends FieldValues>({
    variant = "outlined",
    tooltipTitle,
    required,
    labelText,
    tooltipPosition,
    expertMode = true,
    options,
    tagOptions = false,
    control,
    name,
    setValue
}: FormFieldSelectProps<T>) => {
    if (!required || (required && expertMode)) {
        return (
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
                    <FormControl fullWidth>
                        <Controller
                            control={control}
                            name={name}
                            render={({ field }) => (
                                <Select
                                    IconComponent={(props) => (<KeyboardArrowDownSharpIcon {...props} />)}
                                    variant={variant}
                                    {...field}
                                    value={field.value}
                                    sx={{
                                        height: "1.938rem", fontSize: "0.875rem", borderRadius: "0.188rem", width: "19.438rem",
                                        ".MuiOutlinedInput-notchedOutline": {
                                            borderColor: colour.fieldBorder,
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: colour.fieldBorder,
                                            borderWidth: "0.063rem"
                                        },
                                    }}
                                    onChange={(event) => {
                                        setValue(name, event.target.value as any);
                                        field.onChange(event);
                                    }}
                                >
                                    {options.map((option) => (
                                        <MenuItem
                                            key={option}
                                            value={option}
                                            sx={{ fontSize: "0.875rem" }}
                                        >
                                            {
                                                tagOptions ?
                                                    <Box
                                                        component="span"
                                                        sx={{
                                                            fontSize: "0.75rem",
                                                            display: "inline-block",
                                                            backgroundColor: colour.purple,
                                                            color: colour.white,
                                                            padding: "0.063rem 0.313rem",
                                                            borderRadius: "0.188rem",
                                                            marginLeft: "-0.625rem",
                                                        }}>
                                                        {option}
                                                    </Box> : option
                                            }
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
            </Box>
        );
    }
    return <></>;

};

export default SelectInput;