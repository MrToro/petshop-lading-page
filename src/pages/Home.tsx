import {
	Wrapper,
	Navigation,
	Menu,
	Link,
	SingIn,
	Container,
	LeftColumn,
	RightColumn,
	Heading,
	CTA,
} from "./Home.styles";

import dog from "../assets/images/header-hero_desktop.png";

const Home = () => {
	return (
		<Wrapper>
			<Navigation>
				<Link>Pet-First</Link>
				<Menu>
					<Link to="/">About</Link>
					<Link to="/pets">Service</Link>
					<Link to="/services">Madi-Care</Link>
					<Link to="/services">Blog</Link>
				</Menu>
				<SingIn tertiary={true}>Sing In</SingIn>
			</Navigation>
			<Container>
				<LeftColumn>
					<Heading>
						A pet-first <span>approach to</span> wellness
					</Heading>
					<CTA primary={true}>Learn More</CTA>
				</LeftColumn>
				<RightColumn>
					<img src={dog} alt=" a little dog" />
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Home;
