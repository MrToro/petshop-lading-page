import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Subscribe from "./pages/Subscribe";
import { Pets } from "./pages/Pets";
import Reviews from "./pages/Reviews";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Pets />
			<Adopt />
			<Reviews />
			<Subscribe />
			<Footer />
		</>
	);
};

export default App;
