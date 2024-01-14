import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Pet,
} from "./Pets.styles";

import PetsData from "./Pets.data";
import Images from "./Pets.images";
import { useState } from "react";

export const Pets = () => {
	const [pet, setPet] = useState(0);

	const handlePetClick = (index: number) => {
		setPet(index);
	};

	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<img src={Images.seal} alt="seal" />
				</LeftColumn>
				<RightColumn>
					{PetsData.map((item, index) => (
						<Pet
							key={index}
							src={item.image}
							onClick={() => handlePetClick(index)}
							active={pet === index}
						/>
					))}
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
