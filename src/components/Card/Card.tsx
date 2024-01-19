// Importamos los componentes y estilos necesarios
import { Wrapper, Title, Paragraph, Button } from "./Card.styles";

// Definimos la interfaz para los datos que se mostrarán en la tarjeta
interface Data {
	id: number; // Identificador único de la tarjeta
	icon: string; // URL del icono de la tarjeta
	title: string; // Título de la tarjeta
	description: string; // Descripción de la tarjeta
}

// Definimos la interfaz para el componente de la tarjeta
interface Card {
	data: Data; // Datos de la tarjeta
	isActive: boolean; // Estado de la tarjeta (activa o inactiva)
}

// Definimos el componente de la tarjeta
export const Card: React.FC<Card> = ({ data, isActive }) => {
	return (
		// Renderizamos el contenedor de la tarjeta
		<Wrapper $isPar={data.id % 2 === 0} $isActive={isActive}>
			{/* // Renderizamos el icono de la tarjeta */}
			<picture>
				<img src={data.icon} />
			</picture>
			{/* // Renderizamos el título de la tarjeta */}
			<Title>{data.title}</Title>
			{/* // Renderizamos la descripción de la tarjeta */}
			<Paragraph>{data.description}</Paragraph>
			{/* // Renderizamos el botón de la tarjeta */}
			<Button $tertiary={!isActive}>Explore</Button>
		</Wrapper>
	);
};
