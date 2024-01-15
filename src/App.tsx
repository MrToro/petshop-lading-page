import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";
import Footer from "./components/Footer";
import Adopt from "./pages/Adopt";
import Subscribe from "./pages/Subscribe";
import { Pets } from "./pages/Pets";
import Reviews from "./pages/Reviews";
import Services from "./pages/Services";

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Pets />
			<Services />
			<Adopt />
			<Reviews />
			<Subscribe />
			<Footer />
		</>
	);
};

export default App;
