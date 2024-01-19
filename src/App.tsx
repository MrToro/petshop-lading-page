import "./styles/normalize.css";
import { GlobalStyle } from "./styles/Global.styles";

import { Home } from "./pages/Home/Home";
import { Pets } from "./pages/Pets/Pets";
import { Services } from "./pages/Services/Services";
import { Adopt } from "./pages/Adopt/";
import { Reviews } from "./pages/Reviews/Reviews";
import { Subscribe } from "./pages/Subscribe/Subscribe";
import { Footer } from "./components/Footer/";

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
