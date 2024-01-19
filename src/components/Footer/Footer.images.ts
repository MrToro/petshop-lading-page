import logo from "../../assets/images/footer-logo.svg";
import instagram from "../../assets/images/footer-instagram.svg";
import facebook from "../../assets/images/footer-facebook.svg";
import twitter from "../../assets/images/footer-twitter.svg";
import lines from "../../assets/images/footer-lines.svg";

interface ISocials {
	instagram: string;
	facebook: string;
	twitter: string;
}

interface IImages {
	logo: string;
	lines: string;
	socials: ISocials;
}

const Images: IImages = {
	logo,
	lines,
	socials: {
		instagram,
		facebook,
		twitter,
	},
};

export default Images;
