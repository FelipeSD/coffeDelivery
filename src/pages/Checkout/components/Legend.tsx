import { cloneElement, ReactElement } from "react";
import { Stack, Typography as Text } from "@mui/material";
import { Box } from "@mui/material";

interface LegendProps {
    title: string;
    description: string;
    icon: ReactElement;
}

export default function Legend({ title, description, icon }: LegendProps) {
    const styledIcon = cloneElement(icon, { size: 22 });

    return (
        <Stack direction="row" spacing={1}>
            {styledIcon}
            <Box>
                <Text variant="regularM" component="h5" color="baseSubtitle">{title}</Text>
                <Text variant="regularS" component="p" color="baseText">{description}</Text>
            </Box>
        </Stack>
    )
}