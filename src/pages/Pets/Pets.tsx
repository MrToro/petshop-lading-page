// Importamos los componentes y los datos necesarios
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

// Definimos el componente Pets
export const Pets: React.FC = () => {
	// Definimos el estado para la mascota activa
	const [activePet, setActivePet] = useState<Number>(0);

	// Definimos la función para manejar el clic en una mascota
	const handleActivePetClick = (index: Number) => {
		setActivePet(index);
	};

	// Renderizamos el componente
	return (
		<Wrapper>
			<Container>
				{/* // Renderizamos la columna izquierda con una imagen */}
				<LeftColumn>
					<img src={Images.seal} alt="seal" />
				</LeftColumn>

				{/* // Renderizamos la columna derecha con las mascotas */}
				<RightColumn>
					{PetsData.map((pet: IPet, key: number) => (
						// Para cada mascota, renderizamos un componente Pet
						// Le asignamos una clave única y le indicamos si está activa
						// También le asignamos un manejador de clics que actualiza la mascota activa
						<Pet key={key} $active={activePet === key}>
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
