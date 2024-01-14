import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	AdoptImage,
	Heading2,
	Paragraph,
	List,
	Button,
} from "./Adopt.styles";

const Adopt: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<AdoptImage />
				</LeftColumn>

				<RightColumn>
					<Heading2 light="true">
						Making pet parenting easy for everyone
					</Heading2>

					<Paragraph light="true">
						Could this be the dog with the longest tail? The Rampur Greyhound -
						shy, sensitive, alert, and faithful. This is a breed that has
						climbed its way to being top dog because of its intelligence
					</Paragraph>

					<List>
						<li>Adoption</li>
						<li>Frozen Raw</li>
						<li>Next Day Delivery</li>
					</List>

					<Button>Expore</Button>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Adopt;
