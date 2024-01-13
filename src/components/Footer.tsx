import { Wrapper, Paragraph, Link } from "./Footer.styles";
// import Images from "./Footer.images";

const Footer = () => {
	return (
		<Wrapper>
			<div>
				<Link href="#">{/* <img src={Images.logo} alt="logo" /> */}</Link>
			</div>

			<div>
				<div>
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
				</div>

				<div>
					<Paragraph white="true">Flow</Paragraph>
				</div>
			</div>
		</Wrapper>
	);
};

export default Footer;
