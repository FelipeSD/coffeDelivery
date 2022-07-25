import { styled } from "@mui/material";
import { ReactLocation, Router } from "@tanstack/react-location";
import routes from "./routes";

const Container = styled('div')(({ theme }) => ({
  margin: '0 auto',
  padding: `${theme.spacing(4)}`,
  maxWidth: `${theme.breakpoints.values.lg}px`,
}));
const location = new ReactLocation();

function App() {
  return (
    <Container>
      <Router
        location={location}
        routes={routes} 
      />
    </Container>
  )
}

export default App
