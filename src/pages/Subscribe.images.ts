import desktopAvif from "../assets/images/subscribe_desktop.avif";
import tabletAvif from "../assets/images/subscribe_tablet.avif";
import mobileAvif from "../assets/images/subscribe_mobile.avif";
import desktopWebp from "../assets/images/subscribe_desktop.webp";
import tabletWebp from "../assets/images/subscribe_tablet.webp";
import mobileWebp from "../assets/images/subscribe_mobile.webp";
import desktopPng from "../assets/images/subscribe_desktop.png";
import tabletPng from "../assets/images/subscribe_tablet.png";
import mobilePng from "../assets/images/subscribe_mobile.png";
import arc from "../assets/images/subscribe-arc.svg";
import lines from "../assets/images/subscribe-lines.svg";
import arrow from "../assets/images/subscribe-arrow.svg";

const Images = {
	arc,
	lines,
	arrow,
	desktop: {
		avif: desktopAvif,
		webp: desktopWebp,
		png: desktopPng,
	},
	tablet: {
		avif: tabletAvif,
		webp: tabletWebp,
		png: tabletPng,
	},
	mobile: {
		avif: mobileAvif,
		webp: mobileWebp,
		png: mobilePng,
	},
};

export default Images;
