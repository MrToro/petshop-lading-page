import styled from "styled-components";
import Colors from "../../styles/Colors";

import next from "../../assets/images/arrow-right.svg";
import previous from "../../assets/images/arrow-left.svg";
import diagonalNext from "../../assets/images/arrow-lower-right.svg";
import diagonalPrevious from "../../assets/images/arrrow-upper-left.svg";

export const Button = styled.button<{ border?: Boolean }>`
	padding-inline: 50px;
	padding-block: 16px;
	border-radius: 50%;
	margin-right: -32px;
	background: ${Colors.dark};
	border: 2px solid ${(props) => (props.border ? Colors.white : "transparent")};

	transition: border-color 0.2s ease-in-out;

	&:hover {
		cursor: pointer;
		border-color: ${Colors.primary};
	}
`;

interface ISliderButtonProps {
	onClick: () => void;
	direction: "left" | "right";
	isDiagonal?: Boolean;
	border?: Boolean;
}

const SliderButton: React.FC<ISliderButtonProps> = ({
	onClick,
	direction,
	isDiagonal = false,
	border = false,
}) => {
	return (
		<Button border={border} onClick={onClick}>
			{isDiagonal ? (
				<img
					src={direction === "right" ? diagonalNext : diagonalPrevious}
					alt={direction === "right" ? "slide next" : "slide previous"}
					draggable="false"
				/>
			) : (
				<img
					src={direction === "right" ? next : previous}
					alt={direction === "right" ? "slide next" : "slide previous"}
					draggable="false"
				/>
			)}
		</Button>
	);
};

export default SliderButton;
