import styled from "styled-components";
import {
	Button as GlobalButton,
	Paragraph as GlobalParagraph,
} from "../../styles/Global.styles";
import Colors from "../../styles/Colors";

import parMask from "../../assets/images/service-par-mask.svg";
import oddMask from "../../assets/images/service-odd-mask.svg";

const Wrapper = styled.article<{ isPar?: boolean; isActive: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 8px;
	width: 100%;
	padding: 90px 30px;
	transition: all 0.3s ease-in-out;

	background-color: ${({ isActive }) =>
		isActive ? Colors.yellow : Colors.bright};
	mask-image: url(${({ isPar }) => (isPar ? parMask : oddMask)});
	mask-size: 100% 100%;
	mask-repeat: no-repeat;

	picture {
		background-color: ${({ isActive }) =>
			isActive ? Colors.bright : Colors.yellow};
		border-radius: 50%;
		width: 100px;
		height: 100px;
		margin-bottom: 16px;
		transition: all 0.3s ease-in-out;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			padding: 16px;
		}
	}
`;

const Title = styled.h3`
	color: ${Colors.dark};
	font-family: Josefin Sans;
	font-size: 2.6rem;
	font-style: normal;
	font-weight: 500;
	line-height: 3rem;
`;

const Paragraph = styled(GlobalParagraph)`
	font-size: 2rem;
`;

const Button = styled(GlobalButton)`
	margin-top: 30px;
	width: min-content;
`;

interface ICard {
	data: {
		id: number;
		icon: string;
		title: string;
		description: string;
	};
	isActive: boolean;
}

const Card: React.FC<ICard> = ({ data, isActive }) => {
	return (
		<Wrapper isPar={data.id % 2 === 0} isActive={isActive}>
			<picture>
				<img src={data.icon} />
			</picture>
			<Title>{data.title}</Title>
			<Paragraph>{data.description}</Paragraph>
			<Button tertiary={!isActive}>Explore</Button>
		</Wrapper>
	);
};

export default Card;
