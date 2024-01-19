// Importamos los componentes y los datos necesarios
import { useState } from "react";
import {
	Wrapper,
	Heading2,
	Container,
	ServicesContainer,
	SliderButtons,
} from "./Services.styles";
import Data from "./Services.data";
import { Card } from "../../components/Card";
import { SliderButton } from "../../components/Slider/Button";

// Definimos el componente Services
export const Services = () => {
	// Definimos el estado para la tarjeta activa
	const [cardActive, setCardActive] = useState(0);

	// Definimos la función para pasar a la siguiente tarjeta
	const handleNext = () => {
		if (cardActive < Data.length - 1) {
			setCardActive(cardActive + 1);
		}
	};

	// Definimos la función para pasar a la tarjeta anterior
	const handlePrevious = () => {
		if (cardActive > 0) {
			setCardActive(cardActive - 1);
		}
	};

	// Renderizamos el componente
	return (
		<Wrapper>
			<Container>
				// Renderizamos el título
				<Heading2>Our Services</Heading2>
				// Renderizamos el contenedor de servicios
				<ServicesContainer $cardsCount={Data.length} $currentCard={cardActive}>
					// Mapeamos los datos para renderizar cada tarjeta
					{Data.map((item) => (
						<Card key={item.id} data={item} isActive={cardActive === item.id} />
					))}
				</ServicesContainer>
				// Renderizamos los botones para cambiar de tarjeta
				<SliderButtons>
					<SliderButton onClick={handlePrevious} direction="left" />
					<SliderButton onClick={handleNext} direction="right" border={true} />
				</SliderButtons>
			</Container>
		</Wrapper>
	);
};