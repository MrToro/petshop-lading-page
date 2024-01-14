import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Subscribe from "./pages/Subscribe";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Adopt />
			<Subscribe />
			<Footer />
		</>
	);
};

export default App;
