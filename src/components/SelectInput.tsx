import { Box, FormControl, MenuItem, Select, TextFieldVariants } from '@mui/material';
import { Control, Controller, FieldValues, Path, UseFormSetValue } from 'react-hook-form';
import FormFieldLabel, { FormFieldLabelProps } from './FormFieldLabel';
import { fieldBorder, purple } from './Form';

import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import React from 'react';

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
                <Box>
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
                                    style={{ height: "31px", fontSize: "14px", borderRadius: "3px", width: "311px" }}
                                    sx={{
                                        ".MuiOutlinedInput-notchedOutline": {
                                            borderColor: fieldBorder,
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: fieldBorder,
                                            borderWidth: "1px"
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
                                            style={{ fontSize: "14px" }}
                                        >
                                            {
                                                tagOptions ?
                                                    <Box component="span" sx={{
                                                        fontSize: "12px",
                                                        display: "inline-block",
                                                        backgroundColor: purple,
                                                        color: "white",
                                                        padding: "1px 5px",
                                                        borderRadius: "3px",
                                                        marginLeft: "-10px",
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
                </Box>
            </Box>
        );
    }
    return <></>;

};

export default SelectInput;