import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Subscribe from "./pages/Subscribe";
import Pets from "./pages/Pets";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";
import Home from "./pages/Home";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Home />
			<main>
				<Pets />
				<Services />
				<Adopt />
				<Reviews />
				<Subscribe />
			</main>
			<Footer />
		</>
	);
};

export default App;
