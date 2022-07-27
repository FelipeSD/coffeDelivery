import { cloneElement, ReactElement } from "react";
import { Box, Stack, styled, useTheme } from "@mui/material";

interface ItemProps {
  color: "purple" | "yellow" | "yellowDark";
  children: ReactElement[];
  icon: ReactElement;
}

const Circle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  height: theme.spacing(4),
  width: theme.spacing(4),
}));

export default function Item({ children, icon, color }: ItemProps) {
  const theme = useTheme();

  const styledIcon = cloneElement(icon, {
    color: theme.palette.white,
    weight: "fill",
  });

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box>
        <Circle sx={{ backgroundColor: theme.palette[color] }}>
          {styledIcon}
        </Circle>
      </Box>
      <Box>{children}</Box>
    </Stack>
  );
}
