import { Button, Grid } from '@mui/material';
import { Control, FieldValues, Path, UseFormSetValue } from 'react-hook-form';

import CustomNumberInput from './CustomNumberInput';
import FormFieldSelect from './SelectInput';
import React from 'react';
import { detectObjectsOptions } from '../contstants/contstants';

interface VideoStreamFormProps<T extends FieldValues> {
    expertMode?: boolean;
    control: Control<T, any>;
    setValue: UseFormSetValue<T>;
    name: string;
}

const VideoStreamForm = <T extends FieldValues>({
    expertMode = false,
    control,
    setValue,
    name
}: VideoStreamFormProps<T>) => {
    return (
        <Grid container spacing={1} columnSpacing={4}>
            <Grid item xs={12}>
                <FormFieldSelect
                    control={control}
                    setValue={setValue}
                    name={`detectionSettings.${name}.detectObjects` as Path<T>}
                    labelText="Detect Objects"
                    tooltipTitle="This is detect objects tooltip"
                    options={detectObjectsOptions}
                    expertMode={expertMode}
                    tagOptions={true}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    control={control}
                    labelText="Threshold"
                    name={`detectionSettings.${name}.threshold` as Path<T>}
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    control={control}
                    name={`detectionSettings.${name}.overlap` as Path<T>}
                    labelText="Overlap"
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    required={true}
                    control={control}
                    name={`detectionSettings.${name}.widthMin` as Path<T>}
                    labelText="Width Min"
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    required={true}
                    control={control}
                    name={`detectionSettings.${name}.widthMax` as Path<T>}
                    labelText="Width Max"
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    required={true}
                    control={control}
                    name={`detectionSettings.${name}.heightMin` as Path<T>}
                    labelText="Height Min"
                />
            </Grid>
            <Grid item xs={6}>
                <CustomNumberInput
                    expertMode={expertMode}
                    required={true}
                    control={control}
                    name={`detectionSettings.${name}.heightMax` as Path<T>}
                    labelText="Height Max"
                />
            </Grid>
            <Grid item xs={12} container justifyContent="flex-end">
                <Button
                    variant="contained"

                    style={{ color: "#845EC2", fontWeight: "400", marginTop: 0, fontSize: "12px", borderRadius: "3px", boxShadow: "none", textTransform: "none" }}
                    sx={{
                        "&:hover": { backgroundColor: "rgba(132, 94, 194, 0.1)" },
                        height: "27px", width: "100px", background: "rgba(132, 94, 194, 0.1)"
                    }}
                >
                    Copy to all
                </Button>
            </Grid>
        </Grid>
    );
};

export default VideoStreamForm;