// Importamos los componentes y los datos necesarios
import { useState } from "react";
import {
	Wrapper,
	Container,
	LeftColumn,
	Slider,
	RightColumn,
	Heading2,
	Paragraph,
} from "./Reviews.styles";
import data from "./Reviews.data";
import { SliderButton } from "../../components/Slider/Button";
import { SliderPagination } from "../../components/Slider/Pagination";

// Definimos el componente Reviews
export const Reviews: React.FC = () => {
	// Definimos el estado para la página actual
	const [currentPage, setCurrentPage] = useState<number>(3);

	// Definimos la función para pasar a la siguiente página
	const handleNext = () => {
		if (currentPage === data.length) {
			setCurrentPage(1);
		} else {
			setCurrentPage(currentPage + 1);
		}
	};

	// Definimos la función para pasar a la página anterior
	const handlePrevious = () => {
		if (currentPage === 1) {
			setCurrentPage(data.length);
		} else {
			setCurrentPage(currentPage - 1);
		}
	};

	// Renderizamos el componente
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					{/* // Renderizamos la imagen de la página actual */}
					<img
						src={data.find(({ id }) => id === currentPage).image}
						alt="a our client photo"
					/>
					{/* // Renderizamos el paginador */}
					<Slider>
						<SliderPagination currentPage={currentPage} data={data} />
					</Slider>
				</LeftColumn>
				<RightColumn>
					{/* // Renderizamos el título y la reseña de la página actual */}
					<Heading2>Customer Reviews</Heading2>
					<Paragraph>
						{data.find(({ id }) => id === currentPage).review}
					</Paragraph>
					{/* // Renderizamos los botones para cambiar de página */}
					<div>
						<SliderButton onClick={handlePrevious} direction="left" />
						<SliderButton
							onClick={handleNext}
							direction="right"
							border={true}
						/>
					</div>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};
