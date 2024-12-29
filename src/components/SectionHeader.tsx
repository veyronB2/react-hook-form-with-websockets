import { FormControl, Typography } from "@mui/material";
import React, { FC } from "react";

import { charcoal } from "../contstants/colourVariables";
import { fontWeight } from "../contstants/styles";

interface SectionSeparatorProps {
    text: string;
}

const SectionHeader: FC<SectionSeparatorProps> = ({ text }) => {
    return (
        <FormControl fullWidth>
            <Typography sx={{ fontWeight: fontWeight.bolder, fontSize: "0.875rem", color: charcoal, mt: "1.25rem" }}>
                {text}
            </Typography>
        </FormControl>
    );
};

export default SectionHeader;