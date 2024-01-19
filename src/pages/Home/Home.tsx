// Importamos los componentes y los datos necesarios
import { useState } from "react";
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
	SubHeading,
	CTA,
	Slider,
} from "./Home.styles";
import data from "./Home.data";
import { SliderButton } from "../../components/Slider/Button";
import { SliderPagination } from "../../components/Slider/Pagination";

// Definimos el componente Home
export const Home = () => {
	// Definimos el estado para la página actual
	const [current, setCurrent] = useState(0);

	// Definimos la función para pasar a la siguiente página
	const handleNext = () => {
		if (current === data.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	// Definimos la función para pasar a la página anterior
	const handlePrev = () => {
		if (current === 0) {
			setCurrent(data.length - 1);
		} else {
			setCurrent(current - 1);
		}
	};

	// Renderizamos el componente
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
				<SingIn $tertiary={true}>Sing In</SingIn>
			</Navigation>
			<Container>
				<LeftColumn>
					<Heading>
						<SubHeading>Available in select states</SubHeading>A pet-first{" "}
						<span>approach to</span> wellness
					</Heading>
					<CTA $primary={true}>Learn More</CTA>
				</LeftColumn>
				<RightColumn>
					<img
						src={data.find((item) => item.id === current)?.image}
						alt=" a little pet"
					/>
					<Slider>
						<SliderButton
							direction="left"
							isDiagonal={true}
							onClick={handlePrev}
						/>
						<SliderPagination currentPage={current} data={data} />
						<SliderButton
							direction="right"
							isDiagonal={true}
							onClick={handleNext}
						/>
					</Slider>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};