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
	Slider,
} from "./Home.styles";

import dog from "../assets/images/header-hero_desktop.png";
import SliderButton from "../components/Slider/SliderButton";
import SliderPagination from "../components/Slider/SliderPagination";

const data = [
	{
		id: 0,
	},
	{
		id: 1,
	},
	{
		id: 2,
	},
	{
		id: 3,
	},
	{
		id: 4,
	},
];

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
					<Slider>
						<SliderButton
							direction="left"
							isDiagonal={true}
							onClick={() => {}}
						/>
						<SliderPagination currentPage={2} data={data} />
						<SliderButton
							direction="right"
							isDiagonal={true}
							onClick={() => {}}
						/>
					</Slider>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Home;
