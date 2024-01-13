import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Footer />
		</>
	);
};

export default App;
