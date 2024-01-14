import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Pet,
} from "./Pets.styles";

import PetsData, { IPet } from "./Pets.data";
import Images from "./Pets.images";
import { useState } from "react";

export const Pets = () => {
	const [activePet, setActivePet] = useState<number>(0);

	const handleActivePetClick = (index: number) => {
		setActivePet(index);
	};

	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<img src={Images.seal} alt="seal" />
				</LeftColumn>
				<RightColumn>
					{PetsData.map((pet: IPet, key: number) => (
						<Pet
							key={key}
							src={pet.image}
							onClick={() => handleActivePetClick(key)}
							active={activePet === key}
						/>
					))}
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
