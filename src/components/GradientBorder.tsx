import { Stack, StackProps, styled } from "@mui/material";

interface GradientBorderProps extends StackProps {
  children: React.ReactNode;
}


const CardStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  position: "relative",
  border: "1px solid transparent",
  borderRadius: "0.375rem 2.75rem",
  backgroundClip: "padding-box",
  boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)",
  "&:after": {
    position: "absolute",
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    background: `linear-gradient(to left, #8047F8, #DBAC2C)`,
    borderRadius: "0.375rem 2.75rem",
    content: '""',
    zIndex: -1,
  },
}));

export default function GradientBorder({ children }: GradientBorderProps) {
  return (
    <CardStack>
      {children}
    </CardStack>
  );
}
