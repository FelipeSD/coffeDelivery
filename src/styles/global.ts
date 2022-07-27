import { Theme } from "@mui/material";

export const styles = (theme: Theme) => ({
  body: {
    padding: 0,
    margin: 0,
    backgroundColor: theme.palette.bg,
    fontFamily: "Roboto, sans-serif",
  },
  ".card-default": {
    backgroundColor: theme.palette.baseCard,
    borderRadius: "0.375rem",
  },
  ".card-styled": {
    borderRadius: "0.375rem 2.75rem",
  },
  ".card-gradient-border": {
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
      background: `linear-gradient(to left, #DBAC2C, #8047F8)`,
      borderRadius: "0.375rem 2.75rem",
      content: '""',
      zIndex: -1,
    },
  },
});
