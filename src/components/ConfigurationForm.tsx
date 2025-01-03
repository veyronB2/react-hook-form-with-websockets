import * as colour from "../contstants/colourVariables";
import * as dummyData from "../contstants/dummyData";

import { Box, FormControl, Stack, Typography } from "@mui/material";
import { ConfigurationFormState, defaultFormState } from "../contstants/contstants";
import { Controller, useForm, useWatch } from "react-hook-form";

import FormFieldAccordion from "../common/FormFieldAccordion";
import FormFieldCheckbox from "../common/FormFieldCheckBox";
import React from "react";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "../common/SectionWrapper";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import { ToggleSwitch } from "../Overwrites/muiOverwrites";
import { fontWeight } from "../contstants/styles";

const ConfigurationForm = () => {
    const { control, handleSubmit, setValue, watch, reset } = useForm<ConfigurationFormState>({
        defaultValues: defaultFormState
    });

    const expertMode = useWatch({ control, name: "expertMode" });
    const modelSource = useWatch({ control, name: "modelSettings.modelSource" });

    return (
        <form className="configuration-form">
            <SectionWrapper>
                <FormControl fullWidth sx={{ pt: "1.25rem" }}>
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center", justifyContent: "end" }}>
                        <Typography sx={{ fontWeight: fontWeight.normal, fontSize: "0.875rem", color: colour.charcoal }}>Expert Mode</Typography>
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
            </SectionWrapper>
            <SectionWrapper>
                <SectionHeader text="Model Settings" />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.framework"
                    labelText="Framework"
                    tooltipTitle="This is framework tooltip"
                    options={dummyData.frameworkOptions}
                    expertMode={expertMode}
                />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.modelSource"
                    labelText="Model Source"
                    tooltipTitle="This is model source tooltip"
                    options={dummyData.modelSourceOptions}
                    expertMode={expertMode}
                />
                {
                    modelSource === "Custom Models" ?
                        <SectionWrapper>
                            <Box sx={{ borderLeft: `0.125rem solid ${colour.fieldBorder}`, pl: "0.625rem" }}>
                                <SelectInput
                                    control={control}
                                    setValue={setValue}
                                    name="modelSettings.modelName"
                                    labelText="Model Name"
                                    tooltipTitle="This is model source tooltip"
                                    options={dummyData.modelNameOptions}
                                    expertMode={expertMode}
                                />
                            </Box>
                            <Box sx={{ borderLeft: `0.125rem solid ${colour.fieldBorder}`, pl: "0.625rem" }}>
                                <TextInput
                                    name="modelSettings.modelUrl"
                                    placeholder="https//..."
                                    control={control}
                                    labelText="Model URL"
                                    tooltipTitle="This is model URL tooltip"
                                />
                            </Box>
                        </SectionWrapper> :
                        <SectionWrapper>
                            <Box sx={{ borderLeft: `0.125rem solid ${colour.fieldBorder}` }}>
                                <SelectInput
                                    control={control}
                                    setValue={setValue}
                                    name="modelSettings.modelType"
                                    labelText="Model Type"
                                    required={true}
                                    tooltipTitle="This is model type tooltip"
                                    options={dummyData.modelNameOptions}
                                    expertMode={expertMode}
                                />
                            </Box>
                        </SectionWrapper>
                }
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.processingUnit"
                    labelText="Processing Unit"
                    tooltipTitle="This is processing unit tooltip"
                    options={dummyData.processingUnitOptions}
                    expertMode={expertMode}
                    tagOptions={true}
                />
                <SelectInput
                    control={control}
                    setValue={setValue}
                    name="modelSettings.batchSize"
                    labelText="Batch Size"
                    tooltipTitle="This is batch size tooltip"
                    options={dummyData.batchSizeOptions}
                    required={true}
                    expertMode={expertMode}
                />
            </SectionWrapper>
            <SectionWrapper sx={{ pb: "1.25rem" }}>
                <SectionHeader text="Detection Settings" />
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
            </SectionWrapper>
        </form >
    );
};

export default ConfigurationForm;