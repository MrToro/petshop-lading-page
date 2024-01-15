import styled from "styled-components";

import page from "../../assets/images/page.svg";
import pageActive from "../../assets/images/page-active.svg";

export const Wrapper = styled.div`
	display: flex;
	gap: 16px;
`;

export const Page = styled.div<{ active?: Boolean }>`
	background-image: url(${(props) => (props.active ? pageActive : page)});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 10px;
	height: 10px;
`;

const SliderPagination: React.FC<{
	currentPage: number;
	data: Array<any>;
}> = ({ currentPage, data }) => {
	return (
		<Wrapper>
			{data.map((page) => (
				<Page key={page.id} active={page.id === currentPage} />
			))}
		</Wrapper>
	);
};

export default SliderPagination;
