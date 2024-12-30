import { Button, Grid } from "@mui/material";
import { Control, FieldValues, Path, UseFormSetValue } from "react-hook-form";
import { purple, semiPurple } from "../contstants/colourVariables";

import CustomNumberInput from "./CustomNumberInput";
import React from "react";
import SelectInput from "../common/SelectInput";
import { detectObjectsOptions } from "../contstants/dummyData";
import { fontWeight } from "../contstants/styles";

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
                <SelectInput
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
                    disableRipple
                    variant="contained"
                    sx={{
                        "&:hover": {
                            backgroundColor: semiPurple,
                            boxShadow: 'none'
                        },
                        height: "1.688rem",
                        width: "6.25rem",
                        background: semiPurple,
                        color: purple,
                        fontWeight: fontWeight.normal,
                        marginTop: 0,
                        fontSize: "0.75rem",
                        borderRadius: "0.188rem",
                        boxShadow: "none",
                        textTransform: "none"
                    }}
                >
                    Copy to all
                </Button>
            </Grid>
        </Grid>
    );
};

export default VideoStreamForm;