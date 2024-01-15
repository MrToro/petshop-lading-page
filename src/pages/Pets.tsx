import { useState } from "react";

import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Pet,
} from "./Pets.styles";

import PetsData, { IPet } from "./Pets.data";
import Images from "./Pets.images";

export const Pets: React.FC = () => {
	const [activePet, setActivePet] = useState<Number>(0);

	const handleActivePetClick = (index: Number) => {
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
						<Pet key={key} active={activePet === key}>
							<p>
								{pet.race} <span>({pet.name})</span>
							</p>

							<img src={pet.image} onClick={() => handleActivePetClick(key)} />
						</Pet>
					))}
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
