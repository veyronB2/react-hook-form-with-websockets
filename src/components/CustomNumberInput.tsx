import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import FormFieldLabel, { FormFieldLabelProps } from './FormFieldLabel';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box } from '@mui/material';
import React from 'react';

interface CustomNumberInputProps<T extends FieldValues> extends FormFieldLabelProps {
    labelText: string;
    control: Control<T, any>;
    name: Path<T>;
    expertMode: boolean;
}

const CustomNumberInput = <T extends FieldValues>({ labelText, control, name, required, expertMode }: CustomNumberInputProps<T>) => {
    if (!required || (required && expertMode)) {
        return (
            <Box className="container">
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
            </Box>
        );
    }
    return <></>;
};

export default CustomNumberInput;