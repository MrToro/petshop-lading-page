import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Adopt />
			<Footer />
		</>
	);
};

export default App;
