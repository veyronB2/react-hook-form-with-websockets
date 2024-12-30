import { Box, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import FormFieldLabel, { FormFieldLabelProps } from "../common/FormFieldLabel";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import React from "react";
import { stringToNumber } from "../utilities/utils";

interface CustomNumberInputProps<T extends FieldValues> extends FormFieldLabelProps {
    labelText: string;
    control: Control<T, any>;
    name: Path<T>;
    expertMode: boolean;
    required?: boolean;
}

const CustomNumberInput = <T extends FieldValues>({ labelText, control, name, required, expertMode }: CustomNumberInputProps<T>) => {
    if (!required || (required && expertMode)) {
        return (


            // <Controller
            //     control={control}
            //     name={name}
            //     render={({ field: { value, onChange } }) => (
            //         <TextField
            //             type="number"
            //             onChange={(e) => onChange(stringToNumber(e.target.value))}
            //         />
            //     )}
            // />
            <div className="container">
                <FormFieldLabel labelText={labelText} required={required} />
                <Controller
                    control={control}
                    name={name}
                    render={({ field: { value, onChange } }) => (
                        <Box className="spinner-container">
                            <Box className="value-container">
                                <span className="custom-input-number">{value}</span>
                                <span className="percentage">%</span>
                            </Box>
                            <Box className="spinners">
                                <button className="spinner-button-up" onClick={onChange}><ArrowDropUpIcon className="spinner-icon" /></button>
                                <button className="spinner-button-down" onClick={onChange}><ArrowDropDownIcon className="spinner-icon" /></button>
                            </Box>
                        </Box>
                    )}
                />
            </div>
        );
    }
    return <></>;
};

export default CustomNumberInput;