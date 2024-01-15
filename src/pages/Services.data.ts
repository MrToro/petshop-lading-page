interface Data {
	id: number;
	icon: string;
	title: string;
	description: string;
}

const data: Array<Data> = [
	{
		id: 0,
		icon: "icon",
		title: "Pharmacy",
		description:
			"Apoquel is an oral tablet that works differently than other allergy medications. It goes straight to the source to help relieve itch and inflammation at its core—addressing the underlying cause of irritation",
	},
	{
		id: 1,
		icon: "icon",
		title: "Breed-specific Haircuts",
		description:
			"Regular grooming is essential to your pet's health as it helps prevent skin issues such as matting.",
	},
	{
		id: 2,
		icon: "Cloths",
		title: "Breed-specific Haircuts",
		description:
			"Is your dog at the top of his/her fashion game? Don't forget a dog bikini or swim trunks for your pet's next vacation! Whether poolside, at the beach, or on the yacht, your pooch will look summer-ready",
	},
];

export default data;
