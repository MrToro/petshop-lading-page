import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Heading2,
	Form,
} from "./Subscribe.styles";

const Subscribe = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn />
				<RightColumn>
					<Heading2>Subscribe & Get Pet Updatenews</Heading2>
					<Form>
						<input type="text" placeholder="Mail" />
						<button type="submit" />
					</Form>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Subscribe;
