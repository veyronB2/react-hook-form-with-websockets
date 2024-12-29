import { Box, FormControl, Stack, Typography } from '@mui/material';
import { ConfigurationFormState, batchSizeOptions, defaultFormState, frameworkOptions, modelNameOptions, modelSourceOptions, processingUnitOptions } from '../contstants/contstants';
import { Controller, FieldValues, useForm, useWatch } from 'react-hook-form';

import FormFieldAccordion from './FormFieldAccordion';
import FormFieldCheckbox from './FormFieldCheckBox';
import FormFieldText from './TextInput';
import React from 'react';
import SectionSeparator from './SectionSeparator';
import SelectInput from './SelectInput';
import TextInput from './TextInput';
import { ToggleSwitch } from '../Overwrites/muiOverwrites';
import { fieldBorder } from './Form';

const sectionStyles = {
    display: "flex", flexDirection: "column", gap: "10px"
};

const ConfigurationForm = ({ }) => {
    const { control, handleSubmit, setValue, watch, reset } = useForm<ConfigurationFormState>({
        defaultValues: defaultFormState
    });

    const expertMode = useWatch({ control, name: "expertMode" });
    const modelSource = useWatch({ control, name: "modelSettings.modelSource" });
    console.log("### watch ###", watch());

    return (
        <form style={{ width: "100%", backgroundColor: "white" }}>
            <Box sx={{ ...sectionStyles }}>
                <FormControl fullWidth sx={{ paddingTop: "20px" }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: "end" }}>
                        <Typography sx={{ fontWeight: "400", fontSize: "14px", color: "#444444" }}>Expert Mode</Typography>
                        <Controller
                            control={control}
                            name="expertMode"
                            render={({ field }) => (
                                <ToggleSwitch {...field} onChange={field.onChange} value={field.value} />
                            )}
                        />
                    </Stack>
                </FormControl>
                <TextInput
                    name="displayName"
                    control={control}
                    labelText="Display Name"
                    tooltipTitle="This is display name tooltip"
                />
            </Box>
            <Box sx={{ ...sectionStyles }}>
                <SectionSeparator text="Model Settings" />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.framework"
                    labelText="Framework"
                    tooltipTitle="This is framework tooltip"
                    options={frameworkOptions}
                    expertMode={expertMode}
                />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.modelSource"
                    labelText="Model Source"
                    tooltipTitle="This is model source tooltip"
                    options={modelSourceOptions}
                    expertMode={expertMode}
                />

                {
                    modelSource === "Custom Models" ?
                        <Box sx={{ ...sectionStyles }}>
                            <Box sx={{ borderLeft: `2px solid ${fieldBorder}`, paddingLeft: "10px" }}>
                                <SelectInput
                                    control={control}
                                    setValue={setValue}
                                    name="modelSettings.modelName"
                                    labelText="Model Name"
                                    tooltipTitle="This is model source tooltip"
                                    options={modelNameOptions}
                                    expertMode={expertMode}
                                />
                            </Box>
                            <Box sx={{ borderLeft: `2px solid ${fieldBorder}`, paddingLeft: "10px" }}>
                                <TextInput
                                    name="modelSettings.modelUrl"
                                    placeholder="https//..."
                                    control={control}
                                    labelText="Model URL"
                                    tooltipTitle="This is model URL tooltip"
                                />
                            </Box>
                        </Box> :
                        <Box sx={{ borderLeft: `2px solid ${fieldBorder}` }}>
                            <SelectInput
                                control={control}
                                setValue={setValue}
                                name="modelSettings.modelType"
                                labelText="Model Type"
                                required={true}
                                tooltipTitle="This is model type tooltip"
                                options={modelNameOptions}
                                expertMode={expertMode}
                            />
                        </Box>
                }
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.processingUnit"
                    labelText="Processing Unit"
                    tooltipTitle="This is processing unit tooltip"
                    options={processingUnitOptions}
                    expertMode={expertMode}
                    tagOptions={true}
                />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.batchSize"
                    labelText="Batch Size"
                    tooltipTitle="This is batch size tooltip"
                    options={batchSizeOptions}
                    required={true}
                    expertMode={expertMode}
                />
            </Box>

            <Box sx={{ ...sectionStyles, paddingBottom: "20px" }}>
                <SectionSeparator text="Detection Settings" />
                <FormFieldAccordion
                    control={control}
                    setValue={setValue}
                    name={"video1"}
                    summaryTitle={"Video 1"}
                    summaryTitleSuffix={"videoname"}
                    expertMode={expertMode}
                />
                <FormFieldAccordion
                    control={control}
                    setValue={setValue}
                    name={"video2"}
                    summaryTitle={"Video 2"}
                    summaryTitleSuffix={"camName"}
                    expertMode={expertMode}
                />
                <FormFieldAccordion
                    control={control}
                    setValue={setValue}
                    name={"video1"}
                    summaryTitle={"Video 1"}
                    expertMode={expertMode}
                />
                <FormFieldAccordion
                    control={control}
                    setValue={setValue}
                    name={"video1"}
                    summaryTitle={"Video 1"}
                    expertMode={expertMode}
                />
                <FormFieldCheckbox
                    name="fuseLayer"
                    control={control}
                    labelText="Fuse Layer"
                    tooltipTitle="This is fuse layer tooltip"
                    required={true}
                    tooltipPosition="right"
                    expertMode={expertMode}
                />
                <FormFieldCheckbox
                    name="precisionBoost"
                    control={control}
                    labelText="FP16 Half-Precision Boost"
                    tooltipTitle="This is FP16 tooltip"
                    required={true}
                    tooltipPosition="right"
                    expertMode={expertMode}
                />
            </Box>


        </form >
    );
};

export default ConfigurationForm;