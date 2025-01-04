import Container from "./components/Container/Container";
import Fontandcolors from "./components/Fontsandcolors/Fontandcolors";
import Spacing from "./components/Spacing/Spacing";

function App() {
  return (
    <>
      <Container>
        <Fontandcolors />
      </Container>
      <Container>
        <Spacing />
      </Container>
    </>
  );
}

export default App;
