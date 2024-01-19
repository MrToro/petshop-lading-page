// Importamos los estilos y las imágenes necesarias
import { Button } from "./SliderButton.styles";
import next from "../../../assets/images/arrow-right.svg";
import previous from "../../../assets/images/arrow-left.svg";
import diagonalNext from "../../../assets/images/arrow-lower-right.svg";
import diagonalPrevious from "../../../assets/images/arrrow-upper-left.svg";

// Definimos la interfaz para las propiedades del botón del slider
interface SliderButtonProps {
	onClick: () => void; // Función que se ejecutará al hacer clic en el botón
	direction: "left" | "right"; // Dirección del botón (izquierda o derecha)
	isDiagonal?: Boolean; // Indica si el botón es diagonal
	border?: Boolean; // Indica si el botón tiene borde
}

// Definimos el componente del botón del slider
export const SliderButton: React.FC<SliderButtonProps> = ({
	onClick,
	direction,
	isDiagonal = false,
	border = false,
}) => {
	return (
		// Renderizamos el botón con sus propiedades correspondientes
		<Button $isDiagonal={isDiagonal} $border={border} onClick={onClick}>
			{isDiagonal ? (
				// Si el botón es diagonal, renderizamos la imagen correspondiente
				<img
					src={direction === "right" ? diagonalNext : diagonalPrevious}
					alt={direction === "right" ? "slide next" : "slide previous"}
					draggable="false"
				/>
			) : (
				// Si el botón no es diagonal, renderizamos la imagen correspondiente
				<img
					src={direction === "right" ? next : previous}
					alt={direction === "right" ? "slide next" : "slide previous"}
					draggable="false"
				/>
			)}
		</Button>
	);
};
