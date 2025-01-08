import Borders from "./components/Borders/Borders";
import Container from "./components/Container/Container";
import { Flexbox } from "./components/Flexbox/Flexbox";
import Fontandcolors from "./components/Fontsandcolors/Fontandcolors";
import Spacing from "./components/Spacing/Spacing";
import WithandHeight from "./components/Withandheight/Withandheight";

function App() {
	return (
		<>
			<Container>
				<Fontandcolors />
			</Container>
			<Container>
				<Spacing />
			</Container>
			<Container>
				<Borders />
			</Container>
			<Container>
				<WithandHeight />
			</Container>
			<Container>
				<Flexbox />
			</Container>
			{/*add new comment*/}
		</>
	);
}

export default App;
