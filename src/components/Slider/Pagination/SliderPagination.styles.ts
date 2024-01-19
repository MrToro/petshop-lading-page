import styled from "styled-components";

import page from "../../../assets/images/page.svg";
import pageActive from "../../../assets/images/page-active.svg";

export const Wrapper = styled.div`
	display: flex;
	gap: 16px;
`;

export const Page = styled.div<{ $active?: Boolean }>`
	background-image: url(${({ $active }) => ($active ? pageActive : page)});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: 10px;
	height: 10px;
`;
