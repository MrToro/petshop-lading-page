import { useState } from "react";
import {
	Wrapper,
	Heading2,
	Container,
	ServicesContainer,
	SliderButtons,
} from "./Services.styles";

import Data from "./Services.data";
import Card from "../components/Cards/Card";
import SliderButton from "../components/Slider/SliderButton";

const Services = () => {
	const [cardActive, setCardActive] = useState(0);

	const handleNext = () => {
		if (cardActive < Data.length - 1) {
			setCardActive(cardActive + 1);
		}
	};

	const handlePrevious = () => {
		if (cardActive > 0) {
			setCardActive(cardActive - 1);
		}
	};

	return (
		<Wrapper>
			<Container>
				<Heading2>Our Services</Heading2>
				<ServicesContainer cardsCount={Data.length} currentCard={cardActive}>
					{Data.map((item) => (
						<Card key={item.id} data={item} isActive={cardActive === item.id} />
					))}
				</ServicesContainer>
				<SliderButtons>
					<SliderButton onClick={handlePrevious} direction="left" />
					<SliderButton onClick={handleNext} direction="right" border={true} />
				</SliderButtons>
			</Container>
		</Wrapper>
	);
};

export default Services;
