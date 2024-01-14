import {
	Wrapper,
	Container,
	LeftColumn,
	RightColumn,
	Navigation,
	Lines,
	Socials,
	Paragraph,
	Link,
} from "./Footer.styles";
import Images from "./Footer.images";

const Footer: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<LeftColumn>
					<Link href="#">
						<img src={Images.logo} />
					</Link>
					<Lines src={Images.lines} />
				</LeftColumn>

				<RightColumn>
					<Navigation>
						<Link href="#" white="true">
							About
						</Link>
						<Link href="#" white="true">
							Project
						</Link>
						<Link href="#" white="true">
							Service
						</Link>
						<Link href="#" white="true">
							Client
						</Link>
						<Link href="#" white="true">
							Team
						</Link>
						<Link href="#" white="true">
							Blog
						</Link>
						<Link href="#" white="true">
							Contact
						</Link>
					</Navigation>

					<Socials>
						<Paragraph white="true">Flow</Paragraph>

						<Link href="#">
							<img src={Images.socials.facebook} alt="logo" />
						</Link>
						<Link href="#">
							<img src={Images.socials.instagram} alt="logo" />
						</Link>
						<Link href="#">
							<img src={Images.socials.twitter} alt="logo" />
						</Link>
					</Socials>
				</RightColumn>
			</Container>
		</Wrapper>
	);
};

export default Footer;
